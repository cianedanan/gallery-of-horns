import React from 'react';
import HornedBeast from './HornedBeast.js'
import data from '../assets/data.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {

	render(){
		return(
			<>
			<Container>
				<Row>
					{data.map((beast) => {
						return <HornedBeast id={beast._id} title={beast.title} src={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns}/> 
					})}
				</Row>
			</Container>
			</>
		)
	}
}

export default Main;