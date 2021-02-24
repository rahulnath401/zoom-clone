const express = require("express")
const app = express()
const http = require('http')

const server = http.Server(app)

app.get("/", (req, res) => {
    res.render("./frontend/src/index.js")
})


server.listen(3000, () => {
    console.log("Server started at http://localhost:3000 ...")
})