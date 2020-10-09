import React from 'react';
import './ComicInfo.css';

const ComicInfo = (props) => {
	const comic = props.comicData;

	// console.log('This is props', props)

	return (
		<div>
			<ul className='characters'>
				<li>{comic.name}</li>
				<li>Aliases: {comic.aliases}</li>
				<li>Description: {comic.deck}</li>
			</ul>
			<img src={comic.image.medium_url} alt={comic.icon_url} />
		</div>
	);
};

export default ComicInfo;
