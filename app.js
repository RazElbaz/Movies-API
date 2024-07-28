const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    // we will read file over here
    fs.readFile("./data.txt", "utf-8", (err, data) => {
        if(err) res.send("Error: There was an error accessing the file!");

        res.send(data);
    });
});

app.get("/write", (req, res) => {
    fs.appendFile("./data.txt", "\nCherry", (err) => {
        if(err) res.send("Error: writing to file");
        res.send("Data written successfully!");
    })
    
});

app.listen(8000, () => {
    console.log("Server connected successfully!");
});