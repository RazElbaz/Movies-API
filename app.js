const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");

const mongoose = require("mongoose");


// connecting to mongoDB
mongoose
.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mydbdata.ecizwhr.mongodb.net/moviesdb?retryWrites=true&w=majority&appName=mydbdata`
    ,{}
)
.then(() => {
    console.log("Connection to mongoDB successful!");
})
.catch(() => {
    console.log("Connection to mongoDB failed!");
})


const app = express();


require("./models/movies.model");

// Routes .. 

app.post("/api/movies", addMovie);


app.listen(8000, () => {
    console.log("Server started successfully!");
});