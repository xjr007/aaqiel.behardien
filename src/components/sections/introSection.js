import React from 'react';

export const introSection = () => {
	return (
		<section className='intro_section'>
			<div className='shapes'>
				<div id='circle'></div>
				<div id='square'></div>
				<div id='triangle'></div>
			</div>

			<fieldset className='word_box'>
				<legend>
					<h3 id='name'>Aaqiel Behardien</h3>
				</legend>
				<h1 id='profession'>
					Web<span className='sm_txt blue_txt'>and</span> Software
					Developer
				</h1>
			</fieldset>
			<button type='button' className='btn_explore'>
				Explore
			</button>
		</section>
	);
};

export default introSection;
