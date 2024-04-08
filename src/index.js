// require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path:'./env'})


connectDB().then(
    ()=>{
        app.on("error",(error)=>{
            console.error("error in app",error);
        })

       app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
       }) ;
    }
).catch((error)=>{
    console.log("mongodb connection failed !!! ", error);
});








/*
import express from "express"

const app = express();


(async()=>{
    try{    
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(err)=>{
            console.log("ERROR: ",err);
            throw err;
        } )

        app.listen(process.env.PORT,()=>{
            console.log(`now on ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: ", error);
        throw error;
    }
} )()

*/