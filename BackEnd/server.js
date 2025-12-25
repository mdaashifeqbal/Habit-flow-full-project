const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("server is live now ");
})

app.get("/create",(req,res)=>{
    res.send("new user created");
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
})