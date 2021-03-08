import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMoviePage() {
  const dispatch = useDispatch();
  const history = useHistory(); // this is used get to the next page




  // history.push('/')

  return(
    
    <div>
      <h2>Add a movie</h2>

    <input
      type="text"
      placeholder="Title"
      onChange={(event) => setMovieTitle(event.target.value)}
    />

    





    </div>

  );

}








export default AddMoviePage;