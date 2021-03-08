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
  const [movieGenre, setMovieGenre] = useState(1);
 

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
       genre_id: movieGenre, // this is sending over the the genre_id
      }
    })

    history.push('/')
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
        <option value="0"> ~ </option>
        <option value="1">Adventure</option>
        <option value="2">Animated</option>
        <option value="3">Biographical</option>
        <option value="4">Comedy</option>
        <option value="4">Disaster</option>
        <option value="5">Drama</option>
        <option value="6">Epic</option>
        <option value="7">Fantasy</option>
        <option value="8">Musical</option>
        <option value="9">Romantic</option>
        <option value="10">Science Fiction</option>
        <option value="11">Space-Opera</option>
        <option value="12">Superhero</option>
      </select>

    <button onClick={cancelBtn}>Cancel Button</button>
    <button onClick={saveBtn}>Save Button</button>



    </div>

  );

}

export default AddMoviePage;