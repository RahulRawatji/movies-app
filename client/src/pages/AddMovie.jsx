import axios  from 'axios';

import { Form, Button, Card, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const AddMovieForm = () =>{
    const [ formValues , setformValues ] = useState({});
    const history = useHistory();

    const onChangeFormField = (event) =>{
      const { value , name , type } =event.target;
      setformValues({
        ...formValues,
        [name] : type === "number" ? Number(value) : value
      })
    }

    const onClickSubmit = async() =>{
      try {
        await axios({
            url: 'http://localhost:4000/api/movies',
            method: 'POST',
            data: formValues
        });
        history.push('/');
    }
    catch (e) {
        alert("Add Movie Failed!")
    }
    }

    return (
      <Container className='d-flex justify-content-center'>
        <Card className="add-movie-form shadow ">
          <Card.Header><h2>Add Movie</h2></Card.Header>
          <Card.Body>
            <Form>
            <Form.Group className="mb-3" controlId="movieTitle">
              <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie Title" name="title" onChange = {onChangeFormField} />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="movieRating">
                <Form.Label>Year Of Release</Form.Label>
                <Form.Control type="number" placeholder="Enter Year" name="year_of_release" onChange = {onChangeFormField} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="movieRating">
                <Form.Label>Movie Rating</Form.Label>
                <Form.Control type="number" placeholder="Enter Number" name="rating" onChange = {onChangeFormField} />
              </Form.Group>
          
              <Form.Group className="mb-3" controlId="moviePoster">
                <Form.Label>Poster</Form.Label>
                <Form.Control type="text" placeholder="Enter url" name="poster" onChange = {onChangeFormField}/>
              </Form.Group>

              <Button variant="danger" type="button" onClick={onClickSubmit}>
                Add Movie
              </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    )
  }


export default AddMovieForm;