import { Switch, Route} from 'react-router-dom';


import AddMovieForm from './pages/AddMovie';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';


const Router = () => {
    return (
        <Switch>
          <Route path="/add-movie">
            <AddMovieForm />
          </Route>
          <Route path="/:movieId">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
    )
}

export default Router
