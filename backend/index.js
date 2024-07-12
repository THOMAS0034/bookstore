import express, { response } from "express";
import { PORT ,URL } from "./config.js";
import mongoose from "mongoose";
import {book} from "./models/bookmodel.js";
import cors from 'cors'


const app=express();

app.use(
    cors({
        origin:'http://localhost:3000',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type'],
    })
)

app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req)
});

//Route for new book

mongoose
.connect(URL)
.then(()=>{
    console.log("connected")
    app.listen(PORT,()=>{
        console.log(`Server running at port ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})