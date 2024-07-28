const addMovie = (req, res) => {
    const { movie_name, info, rating } = req.body;

    // validations

    try{
        if(!movie_name) throw "Movie name must be provided";
        if(!info) throw "Info must be provided";
        if(!rating) throw "Rating must be provided";
        if(rating < 1 || rating > 10) throw "Rating must be between 1-10";
    } 
    catch(e){
        res.status(400).json({
            status: "failed",
            message: e
        });
        return;
    }
    

    //success!
    res.status(200).json({
        status: "success",
        message: "Movie added successfully!"
    });
};

module.exports = addMovie;