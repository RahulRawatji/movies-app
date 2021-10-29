const express = require('express');

const { getAllMovies , getMovie, addMovie , getTopRated } = require('../controllers/movieController');

const router = express.Router();

router.get("/",getAllMovies);
router.get("/:movieId",getMovie);
router.get("/topRated",getTopRated);
router.post("/",addMovie);


module.exports = router