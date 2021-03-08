import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage'
import AddMoviePage from '../AddMoviePage/AddMoviePage'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>        
        {/* This link will take the user back to the home page. */}
      <Link to="/" > Home </Link> 
      <br/>
      <Link to="/AddAMovie" > Add A Movie </Link> 

        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact>
          <DetailsPage />
        </Route>

        {/* Add Movie page */}
        <Route path="/AddAMovie" exact>
          <AddMoviePage />
        </Route>


      </Router>
    </div>
  );
}


export default App;
