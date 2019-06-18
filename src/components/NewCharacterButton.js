import React from 'react';

import './NewCharacterButton.css'

export default class NewCharacterButton extends React.Component {
	onClick(){
		this.props.setVar(Math.floor(Math.random()*9933));
	}
	render() {
		// this.props.setVar(Math.floor(Math.random()*9933));
		return (
			<div className='newCharacterButton'>
				<button className='button' type='button' onClick={()=> this.onClick()} >
					Load New Character
				</button>
			</div>
		);
	}
}
