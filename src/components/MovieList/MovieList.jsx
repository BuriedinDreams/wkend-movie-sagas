import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

import { useHistory } from 'react-router-dom';

import MovieItem from '../MovieItem/MovieItem'


function MovieList() {

  const history = useHistory(); // this is used get to the next page

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies);

   

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function handleClick(movieID) {
      console.log('inside handleclicked, movieID', movieID);

      // dispatch({
      //   type: 'FETCH_ONE_MOVIE',
      //   payload: movieID  // this is sending the movie_id to the index file.
      // })

      // console.log("im clicked");
      

    };

   


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                          {/* the movie id and movie itself are being sent to a movieItem file. */}
                           <MovieItem  movie={movie} /> 
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;