//TANER SOLAK
const express = require("express")
const fs = require("fs")
const app = express()
const path = require("path");

const html = path.join(__dirname,"./public/index.html");
const port = process.env.PORT || 3000

app.use(express.json());

app.listen(port, () => {
    console.log("Server is running on port: " + port);
})

app.get("/", (req, res) => {
    res.sendFile(html);
})

app.get("/test_text", (req, res) => {
    res.send("18360859034")
})
app.get("/test_html", (req, res) => {
    res.send("<html><h1>Taner Solak</h1></html>")
})

app.get("/test_json", (req, res) => {

    res.send({
        numara: "18360849034",
        ad: "Taner",
        soyad: "Solak"
    })


})

app.get("/test_geocode", (req, res) => {

    res.send("geocode")


})
app.get("/test_weather", (req, res) => {

    res.send("weather")


})



