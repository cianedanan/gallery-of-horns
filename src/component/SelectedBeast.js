import React from 'react';
import '../css/SelectedBeast.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component{
	render() {
		return (
			<>
			  <Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
					
						<Modal.Header closeButton>
							<Modal.Title>{this.props.clickedBeast.title}</Modal.Title>
						</Modal.Header>
			
						<Modal.Body>

							<Card.Text>{this.props.clickedBeast.description}</Card.Text>
						</Modal.Body>
			
						<Modal.Footer>
						 <Card.Img src={this.props.clickedBeast.image_url}></Card.Img>
						</Modal.Footer>
					
				</Modal>
			</>
		);
	}
}

export default SelectedBeast