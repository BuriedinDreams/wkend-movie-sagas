import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_ONE_MOVIE', fetchOneMovie); // this is listening for it's 'phoneNumber' to be called
    yield takeEvery('FETCH_ONE_GENRE', fetchOneGenre);
    yield takeEvery('SET_NEW_MOVIE', setNewMovie);

}

function* setNewMovie(action){

  try {
    yield axios.post(`/api/movie`, action.payload); 

    yield put({ 
      type: 'SET_MOVIES' // this is going to run the movies reducer.
    });

  } catch {
      console.log('Got an error inside setNewMovie');
  } 

}



function* fetchOneMovie(action) {  // We are receiving a payload from MovieListFile.
  try {
    const movie = yield axios.get(`/api/movie/${action.payload}`); // this action.payload is the id 
        // console.log('get one movie:', action.payload );
        console.log('movies log in saga', movie);
       
       yield put({ type: 'SET_ONE_MOVIE', payload: movie.data }); // this is sending the id to the next place.
      //  yield put({ type: 'SET_ONE_MOVIE', payload: movies.movieID.data }); // this is sending the id to the next place.

      } catch {
          console.log('get all error');
      }
}


function* fetchOneGenre(action) {  // We are receiving a payload from MovieItem File.
  try {
  const genres = yield axios.get(`/api/genre/${action.payload}`); // this action.payload is the id 
        // console.log('get one movie:', action.payload );
        console.log('Genres log in saga', genres);
       
       yield put({ type: 'SET_ONE_GENRE', payload: genres.data }); // this is sending the id to the next place.
      

      } catch {
          console.log('get all error');
      }
}




function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();



// Used to store one movie_id to be sent to DetailsPage
const SendOneMovie = (state = [], action) => {
  if (action.type === 'SET_ONE_MOVIE') {
    return action.payload;
  }
  return state;
}; // end SendOneMovie


const sendOneGenre = (state = [], action) => {
  if (action.type === 'SET_ONE_GENRE') {
    return action.payload;
  }
  // else if (action.type === 'CLEAR_GENRES'){
  //   // return action.payload
  // }
  return state;
}; // end sendOneGenre





// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// 
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        SendOneMovie,
        sendOneGenre,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
