import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './MovieList.css'

import { useHistory } from 'react-router-dom';

import MovieItem from '../MovieItem/MovieItem'


function MovieList() {

  // const history = useHistory(); // this is used get to the next page

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Grid container key={movie.id} item xs={3} spacing={3} justify="space-around" >
                          {/* the movie id and movie itself are being sent to a movieItem file. */}
                           <MovieItem  movie={movie} /> 
                        </Grid>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;