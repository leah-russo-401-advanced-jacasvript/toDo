import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm(props) {

  const [state, setState] = useState( { item: {} } ) 
  // constructor(props) {
  //   super(props);
  //   this.state = { item: {} };
  // }
  function handleInputChange(e) {
    setState({ item: {...state.item, [e.target.name]: e.target.value } });
  };

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(state.item);
    const item = {};
    setState({item});
  };

    return (
      <>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> To Do Item </Form.Label>
            <Form.Control type="text" placeholder="Add To Do List Item" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Group>
          <Button variant="primary" as="input" type="submit" value="submit" />
        </Form>
        {/* <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <button>Add Item</button>
        </form> */}
      </>
    );
  
}

export default TodoForm;