import React from 'react';
import './SocialMediaButtons.css'

export default class SocialMediaButtons extends React.Component {

	render() {
		return (
			<div className='SocialMediaButtons' >
				<a 
				data-tool-tip="This is a link to a blank Twitter-Tweet page."
				href='https://www.twitter.com/intent/tweet'
				target='_blank'
				rel="noopener noreferrer"
				>
					<img 
						className='twicon' 
						alt=''
					/>
				</a>
				<a 
				data-tool-tip="This is a link to freecodecamp's Facebook site."
				href='https://www.facebook.com/freecodecamp/'
				target='_blank'
				rel="noopener noreferrer"
				>
					<img 
						className='fbicon' 
						alt=''
					/>
				</a>
			</div>
		);
	}
}
