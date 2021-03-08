import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieItem( {movie} ) {

  const dispatch = useDispatch();
  // const movies = useSelector(store => store.movies);
  const history = useHistory(); // this is used get to the next page



  function handleClick() {
    // console.log("Im clicked ");

     dispatch({
        type: 'SET_ONE_MOVIE',
        payload: movie // this is sending the movie information as a whole to the index file.
      })


      dispatch({
        type: 'FETCH_ONE_GENRE',
        payload: movie.id // this is sending the movie_id over to the saga. 
      })

      history.push('/details') // this is taking the user to the next page once the button is clicked.

  };





  return(
    <div>
      <h2>{movie.title}</h2>
      <img onClick={ handleClick } src={movie.poster} />
    </div>
  );

}

export default MovieItem;