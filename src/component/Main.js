import React from 'react';
import HornedBeast from './HornedBeast.js'
import weedle from '../Weedle.png'
import rapidash from '../Rapidash.png'

class Main extends React.Component {
	render(){
		return(
			<>
				<div>
					<HornedBeast title={'Weedle'} src={weedle} alt={'an image of weedle'} p={'A wild Weedle appeared!'}/>
					<p></p>
				</div>
				<div>
					<HornedBeast title={'Rapidash'}  src={rapidash} alt={'an image of rapidash'} p={'A wild Rapidash appeared!'}/>
				</div>
			</>
		)
	}
}

export default Main;