import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';
import axios from 'axios';

function MovieDetails() {
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchMovieDetails();
    }, [])

    const fetchMovieDetails = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: `http://localhost:4000/api/movies/${movieId}`
            });

            setDetails(response.data.movie);
        }
        catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <Card className="movie-detail-card">
            {error && <Alert variant='danger'>{error}</Alert>}

                    <Card.Header><h3>{details.title}</h3></Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" src={details.poster} />
                        <p>Movie Id : {details.id}</p>
                        <p>Rating: {details.rating}</p>
                        <p>Year Of Release: {details.year_of_release}</p>
                       
                    </Card.Body>
        </Card>
        </>
    )
}

export default MovieDetails;