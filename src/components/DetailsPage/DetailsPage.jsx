import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function DetailsPage() {

  const retrievedDetails = useSelector( store => store.SendOneMovie);
  console.log('retrievedDetails', retrievedDetails);




  return (
    <div>
      <h1>Details Page</h1>

      {/* {retrievedDetails.map((DetailsForMovie) => {
          return (
            <div>
            key={DetailsForMovie.id} DetailsForMovie={DetailsForMovie}
            </div>
            );
        })} */}



    </div>

  )

}


export default DetailsPage;