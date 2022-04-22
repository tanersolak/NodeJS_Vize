const express = require("express")
const fs = require("fs")
const user = require("web-server/src/utils/user.js")
const app = express()

const port = process.env.PORT || 3000

app.listen(port , ()=>{
    console.log("Server is running on port: 3000");
})

app.get("/",(req,res)=>{
    res.send("Ana Sayfa")
})

app.get("/test_text",(req,res)=>{
    res.send("18360859034")
})
app.get("/test_html",(req,res)=>{
    res.send("<html><h1>Taner Solak</h1></html>")
})

app.get("/testjson",(req,res)=>{

    


})

