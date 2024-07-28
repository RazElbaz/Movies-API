require("express-async-errors");

const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");

const mongoose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
const errorHandler = require("./handlers/errorHandler");

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


app.use(express.json());

//Models ..
require("./models/movies.model");

//Routes .. 
app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);


app.use(errorHandler);

app.listen(8000, () => {
    console.log("Server started successfully!");
});