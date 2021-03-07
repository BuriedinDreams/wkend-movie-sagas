import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function DetailsPage() {

  const retrievedDetails = useSelector( store => store.SendOneMovie);
  console.log('retrievedDetails', retrievedDetails);

  const history = useHistory(); // this is used get to the next page 


  // history.push('/') 

  return (
    <div>
      <h1>Details Page</h1>

     {/* <p> {retrievedDetails[0].id} </p> */}
       


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