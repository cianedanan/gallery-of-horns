import React from 'react';
import '../css/HornedBeast.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: [],
      likes: 0,
    };
  }

  handleClick = () => {
    this.setState({ hearts: this.state.hearts + '❤️' });
    this.setState({ likes: this.state.likes + 1 });
  };

  dislikeClick = () => {
    this.setState({ likes: this.state.likes - 1 });
  };

  render() {
    return (
      <Card style={{ width: '18rem' }} className='container'>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img
          onClick={() => this.props.setShowModalTrue(this.props.id)}
          variant='top'
          src={this.props.src}
          style={{ width: '250px', height: '200px', margin: '15px' }}
          className='rounded mx-auto border'
        />
        <Card.Body>
          <div style={{ height: '120px' }}>
            <Card.Text>{this.props.description}</Card.Text>
          </div>
          <div style={{ position: 'relative', bottom: '0px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button variant='primary' onClick={this.handleClick}>
                Like
              </Button>
              <Card.Text>❤️{this.state.likes}</Card.Text>
            </div>
            <div style={{ margin: '8px' }}>
              <Card.Text>{this.state.hearts}</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default HornedBeast;
