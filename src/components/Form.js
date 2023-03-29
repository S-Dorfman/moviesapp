
import { useState } from "react";
import { Form as BForm, Button, Container } from "react-bootstrap";

function Form(props){
    const { movieSearch, setMovie } = props;
    //formData is an Object
    const [formData, setFormData] = useState({searchTerm: ""});
    //handle the change on the input
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
//handle the change on submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await movieSearch(formData.searchTerm);
        setMovie(data)
    }

    return (
        <Container className="mt-3">
          <BForm onSubmit={handleSubmit} className="sm">
            <BForm.Group className="mb-3">
              <BForm.Control
                className="mb-3"
                type="text"
                value={formData.searchTerm}
                name="searchTerm"
                placeholder="Search"
                onChange={handleChange}
              />
    
              <Button variant="outline-info" type="submit">Search</Button>
            </BForm.Group>
          </BForm>
        </Container>
      );
    }

export default Form; 
