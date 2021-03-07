const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log('req.params.id', req.params.id );
  const query = 
  `select "genres".name from "genres"
  join "movies_genres"
  on "genres".id = "movies_genres".genre_id
  Where "movies_genres".movie_id = $1 ;`  
  const movieID = req.params.id

  pool.query( query, [movieID] )
  .then( result => {
    res.send(result.rows); // this is going to give me the all the information for that said movie.id
  })
  .catch(err => {
    console.log("ERROR: IN GET Genres", err);
    res.sendStatus(500)
  })
});

module.exports = router;