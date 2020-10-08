import React from 'react';

const ComicInfo = (props) => {
	const comic = props.comicData;

	// console.log('This is props', props)

	return (
		<div>
			<h1>Name: {comic.name}</h1>
			<h3>Aliases: {comic.aliases}</h3>
			<img src={comic.image.medium_url} alt={comic.icon_url} />
			<h3>Description: {comic.deck}</h3>
		</div>
	);
};

export default ComicInfo;
