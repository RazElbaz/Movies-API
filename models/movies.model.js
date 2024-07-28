const mongoose = require("mongoose");
const { type } = require("os");


const moviesSchema = new mongoose.Schema({
    movie_name: {
        type: String
    },
    info:{
        type: String
    },
    rating:{
        type: Number
    }
})

const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel;