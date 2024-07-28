const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    // we will read file over here
    fs.readFile("./data.txt", "utf-8", (err, data) => {
        if(err) res.send("There was an error accessing the file!");

        res.send(data);
    });
});

app.get("/cars", (req, res) => {
    res.send("This is for cares");
});

app.listen(8000, () => {
    console.log("Server connected successfully!");
});