import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';




class HornedBeast extends React.Component {

	constructor(props){
		super(props);
		this.state={
			hearts: '',
			likes: 0,
		}
	}
	
	handleClick = () => {
		this.setState({hearts: this.state.hearts + '❤️'});
		this.setState({likes: this.state.likes + 1});
	}

	dislikeClick = () => {
		this.setState({likes: this.state.likes - 1});
	}

	render(){
		return (
			<Card style={{ width: '18rem' }} className='mx-2 my-2'>
				<Card.Img variant="top" src={this.props.src} style={{ width: '250px', height: '200px', margin: '15px' }} className='rounded mx-auto border'/>
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>{this.props.description}</Card.Text>
					<div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
						<Button variant="primary" onClick={this.handleClick}>Like</Button>
						<Card.Text>❤️{this.state.likes}</Card.Text>
					</div>
					<div style={{margin: '8px'}}>
						<Card.Text>{this.state.hearts}</Card.Text>
					</div>
				</Card.Body>
			</Card>
		);
	}	
}
export default HornedBeast;