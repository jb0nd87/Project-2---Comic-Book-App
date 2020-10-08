import React from 'react';

const Chars = (props) => {
	const comic = props.comicData;

	// console.log('This is props', props)

	return (
		<div>
			<ul>
				<li>{comic.name}</li>
			</ul>
		</div>
	);
};

export default Chars;
