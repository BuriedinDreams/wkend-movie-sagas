import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

import { useHistory } from 'react-router-dom';


function MovieList() {

  const history = useHistory(); // this is used get to the next page

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function handleClick(movieID) {
      console.log('cool beans', movieID);

      dispatch({
        type: 'FETCH_ONE_MOVIE',
        payload: movieID  // this is sending the movie_id to the index file.
      })

      // console.log("im clicked");
      history.push('/details') // this is taking the user to the next page once the button is clicked.

    };

   


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={ () => { 
                              handleClick(movie.id) // this is sending the movie.id to the handleClick
                            } } src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;