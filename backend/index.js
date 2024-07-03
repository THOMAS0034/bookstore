import express, { response } from "express";
import { PORT ,URL } from "./config.js";
import mongoose from "mongoose";
import {book} from "./models/bookmodel.js";

const app=express();

app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req)
});

//Route for new book
app.post('/books', async (req,res)=>{
    try{
        if(!req.body.title ||
            !req.body.author||
            !req.body.publishyear
        ){
            return res.status(400).send({
                message:"Required field are not filled",
            })
        } 
        const newbook={
            title:req.body.title,
            author:req.body.author,
            publishyear:req.body.publishyear
        }
        const Book=await book.create(newbook)
        return res.status(201).send(Book)
    }
    catch(error){
        console.log(error)
    }
})


mongoose
.connect(URL)
.then(()=>{
    console.log("connected")
    app.listen(PORT,()=>{
        console.log("hello")
    })
})
.catch((error)=>{
    console.log(error)
})