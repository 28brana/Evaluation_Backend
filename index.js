const express=require("express");
const Map=require("./model/mapSchema");
const db = require('./config/db');
const cors = require('cors')

const PORT=process.env.PORT || 5000;
const app=express();

app.use(cors())

app.use(express.json());
app.get("/",async(req,res)=>{
    try{
        const result=await Map.find();
        res.json(result);
    }catch(err){
        res.status(500).send("Failure");
    }
})

app.post("/insert",async(req,res)=>{
    try{
        if(!req.body){
            res.status(500).send("Request body is empty");
        }
        const obj=new Map(req.body);
        await obj.save();
        res.send("Success");
    }catch(err){
        res.status(500).send("Failure "+err);
    }
})

app.listen(PORT,(err)=>{
    if(err){
        console.log("Err",err);
    }{
        console.log("Listening to the Port Number "+PORT);
    }
})