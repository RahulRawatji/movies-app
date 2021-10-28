import {useState , useEffect } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';


import SearchBar from '../components/SearchBar';


const Home = () =>{

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState([]);
    const [searchText, setSearchText] = useState('');
    const history = useHistory();
  
    useEffect(() => {
      fetchMovies()
    }, []);
  
    const fetchMovies = async () => {
      try{
        const response = await axios(`http://localhost:4000/api/movies?searchText=${searchText}`);
        setMovies(response.data);
        setError(null);
      }catch(e){
        setError(`Server Error : ${e.message} ${e.stack}`);
      }
    }

    const onClickMovieDetail = ({ id }) => {
      history.push(`/${id}`);
    }

    return (
    
      <>
        <SearchBar onClickRefresh={fetchMovies} setSearchText={setSearchText} />
        {error && <Alert variant="danger" dismissible>{error}</Alert>}
        <div className='mt-4 d-flex flex-wrap justify-content-start'>
        {movies.map( movie =>{
          const {id, title , poster} = movie;
          return(
                <Card  key={id} className="movie-card m-2 shadow">
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={poster} />
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="success" onClick={() => onClickMovieDetail(movie)}>Movie Detail</Button>
                  </Card.Body>
                </Card>
          )
        })}
      </div>
      </>
    )
  }

export default Home;