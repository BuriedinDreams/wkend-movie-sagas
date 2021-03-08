import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

function AddMoviePage() {
  const dispatch = useDispatch();
  const history = useHistory(); // this is used get to the next page

  const [movieTitle, setMovieTitle] = useState('');
  const [moviePoster, setMoviePoster] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
 

  function cancelBtn() {
    // console.log("I'm clicked cancelBtn");
    history.push('/')

  }

  function saveBtn() {
    console.log("I'm clicked saveBtn");

    dispatch({
      type: 'SET_NEW_MOVIE',
      payload: {
       title: movieTitle,
       poster: moviePoster,
       description: movieDescription,
      }
    })


  }



  return(
    
    <div>
      <h2>Add a movie</h2>

    <input
      type="text"
      placeholder="Enter a movie title"
      onChange={(event) => setMovieTitle(event.target.value)}
    />

    <input
      type="text"
      placeholder="Enter image URL"
      onChange={(event) => setMoviePoster(event.target.value)}
    />

    <input
      type="text"
      placeholder="Enter movie description"
      onChange={(event) => setMovieDescription(event.target.value)}
    />
      <select name="genre" onChange={(event) => {setMovieGenre(event.target.value) }}>
        <option value="Adventure">Adventure</option>
        <option value="Animated">Animated</option>
        <option value="Biographical">Biographical</option>
        <option value="Comedy">Comedy</option>
        <option value="Disaster">Disaster</option>
        <option value="Drama">Drama</option>
        <option value="Epic">Epic</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Musical">Musical</option>
        <option value="Romantic">Romantic</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Space-Opera">Space-Opera</option>
        <option value="Superhero">Superhero</option>
      </select>

    <button onClick={cancelBtn}>Cancel Button</button>
    <button onClick={saveBtn}>Save Button</button>



    </div>

  );

}

export default AddMoviePage;