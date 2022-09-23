import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


class FormBeast extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.props.handleFormSubmit}>
            <Form.Group controlId='horns'>
              <Form.Control type='text' placeholder='Normal text' />
            </Form.Group>
          </Form>

          <Form.Select aria-label='Default select example' onChange={this.props.handleFormSubmit}>
            <option> All Beast </option>
            <option value='1'>One Horn</option>
            <option value='2'>Two Horns</option>
            <option value='3'>Three Horns</option>
            <option value='100'>Wow</option>
           
          </Form.Select>
        </Container>
      </>
    );
  }
}

export default FormBeast;
