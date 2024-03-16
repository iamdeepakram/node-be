const express = require("express");

const app = express();
const port = 8080;

app.listen(port, (req, res)=>{
    console.log(`Server is running on port ${port}`);
})

app.get("/home", (req, res)=>{
    console.log(`Browser requested`);
    res.send(`<h1>Hello World!!</h1>`)
})