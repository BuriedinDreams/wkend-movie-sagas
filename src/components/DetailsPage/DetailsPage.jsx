import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function DetailsPage() {
  const dispatch = useDispatch();

  const retrievedDetails = useSelector( store => store.SendOneMovie);
  console.log('retrievedDetails', retrievedDetails[0].id);


  // const genres = useSelector(store => store.genres);
  // console.log('genres' ,genres);

  // useeffect here
  // have genres thing.


  dispatch({ // this dispatch is going to send the movie_id so we can reference it for retrieving the correct genre.
    type: 'FETCH_GENRES',
    payload: retrievedDetails[0].id // this is the movie.id
  })




  const history = useHistory(); // this is used get to the next page 


  // history.push('/') 

  return (
    <div>
      <h1>Details Page</h1>


      {retrievedDetails.map((DetailsForMovie) => {
          return (
            <div key={DetailsForMovie.id} >
             <h3> {DetailsForMovie.title} </h3>
             <img src={DetailsForMovie.poster} />
             <p> {DetailsForMovie.description} </p>
            </div>
            );
        })}
    </div>










  )

}


export default DetailsPage;