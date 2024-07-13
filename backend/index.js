import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, URL } from './config.js'; // Ensure these are correctly set in your config
import bookRouter from './routes/booksroute.js'; // Ensure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use the router
app.use('/books', bookRouter); // All routes in bookRouter will be prefixed with /books

// Connect to MongoDB and start the server
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
