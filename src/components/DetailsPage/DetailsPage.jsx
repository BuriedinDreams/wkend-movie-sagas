import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


function DetailsPage() {
  const dispatch = useDispatch();
  
  // const history = useHistory(); // this is used get to the next page 
  // history.push('/details') // this is taking the user to the next page once the button is clicked.

  const retrievedDetails = useSelector( store => store.SendOneMovie);
  console.log('retrievedDetails', retrievedDetails );

  const genres = useSelector(store => store.sendOneGenre);
  console.log('genres' ,genres);

  dispatch({ // this dispatch is going to send the movie_id so we can reference it for retrieving the correct genre.
    type: 'FETCH_GENRES',
    payload: retrievedDetails.id // this is the movie.id
  })


  return (
    <div>
      <h1>Details Page</h1>

      <h2>{retrievedDetails.title}</h2>
      <img src= {retrievedDetails.poster} />
      <p>{retrievedDetails.description}</p>

      {genres.map( (genre, i) => {
        return (
          <div key={ i } > 
            <p>{genre.name}</p> 
          </div>
          );
        })}
    
    </div>

  )

}


export default DetailsPage;