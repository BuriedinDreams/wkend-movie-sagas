const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log('req.params.id GENRES', req.params.id );
  const query = 
  `select "genres".name from "genres"
  join "movies_genres"
  on "genres".id = "movies_genres".genre_id
  Where "movies_genres".movie_id = $1 ;`  
  const genreID = req.params.id

  pool.query( query, [genreID] )
  .then( result => {
    res.send(result.rows); // this is going to give me the all the information for that said genres
  })
  .catch(error => {
    console.log("ERROR: IN GET Genres", error);
    res.sendStatus(500)
  })
});

module.exports = router;