const addMovie = (req, res) => {
    
    console.log(req.body);

    res.status(200).json({
        status: "This is add a movie route!"
    })
}

module.exports = addMovie;