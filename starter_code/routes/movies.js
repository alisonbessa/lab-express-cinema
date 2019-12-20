const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
    Movie.find()
    .then(movies => {
      res.render('movies', {
          movies
      });  
    })
    
});

router.get('/movies/:movieId', (req, res, next) => {
    let {
      movieId
    } = req.params;
    
    Movie.findById(movieId)
      .then(movie => {
      res.render('/', {
        movie
      });
    })
    .catch(error => console.log(error))
  });

module.exports = router;
