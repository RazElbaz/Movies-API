const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from server!");
});

app.get("/cars", (req, res) => {
    res.send("This is for cares");
});

app.listen(8000, () => {
    console.log("Server connected successfully!");
});