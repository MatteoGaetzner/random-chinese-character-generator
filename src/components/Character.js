import React from 'react';
import './Character.css' 
export default class Character extends React.Component {
	render() {
		let randomVar = this.props.randomVar
		let charList = this.props.charList
		let element = charList[randomVar]
		function translation(){
			if(element.translation !== ''){
				return <p><b>Translation: </b>  {element.translation}</p>
			} else {
				return 'No translation available.'
			}
		}
		return (
			<div className='characterContainer'>
				<p className='character' >
					{element.character}
				</p>
				<p className='translation' >
					{translation()}
				</p>
			</div>
		);
	}
}
