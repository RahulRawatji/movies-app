import { Form, Button } from 'react-bootstrap'

const SearchBar = ({setSearchText,onClickRefresh}) => {
    return (
        <div className='d-flex justify-content-between shadow'>
            <Form.Control type="text" placeholder="Search For Movie.." onChange={(event) => setSearchText(event.target.value)}/>
            <Button variant="primary me-2" onClick = {onClickRefresh}>Search</Button>
            <Button variant="success" onClick={onClickRefresh}>Refresh</Button>
        </div>
        )
}

export default SearchBar