import React from 'react';

const ComicInfo = (props) => {
	const comic = props.comicData;

	console.log('This is props', props)

	return (
		<div>
			<h1>Name: {comic.name}</h1>
			<h3>Aliases: {comic.aliases}</h3>
			{/* <h2>First Appearance: {comic.first_appeared_in_issue}</h2> */}
			<img src={comic.image.medium_url} alt={comic.icon_url} />
			<h3>Description: {comic.deck}</h3>
		</div>
	);
};

export default ComicInfo;
