import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3 white'>
			{'This magic brain will detect faces in your picture. Try it out.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input 
						className='f4 pa2 w-70 center br3 bw0' type='text' 
						onChange={onInputChange}
						/>
					<button 
						className='w-30 grow f4 bw0 ph3 pv2 dib white bg-dark-pink br3'
						onClick={onButtonSubmit}
						>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;