const express = require("express")
const fs = require("fs")
const user = require("./utils/user.js")
const app = express()

//const html= require("./public/index.html")
const port = process.env.PORT || 3000

app.use(express.json());

app.listen(port , ()=>{
    console.log("Server is running on port: 3000");
})

app.get("/",(req,res)=>{
    res.send("./src/public/index.html")
})

app.get("/test_text",(req,res)=>{
    res.send("18360859034")
})
app.get("/test_html",(req,res)=>{
    res.send("<html><h1>Taner Solak</h1></html>")
})

app.get("/testjson",(req,res)=>{

    res.send(user.getJson())


})

