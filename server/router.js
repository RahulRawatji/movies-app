const express = require('express');

const router = express.Router();

const movieRouter = require('./routes/moviesRoutes')

router.use('/movies',movieRouter);

module.exports = router 