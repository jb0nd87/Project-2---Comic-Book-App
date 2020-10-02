import React from 'react';

const ComicInfo = (props) => {
	const comic = props.comicData;

	return (
		<div>
			<h1>Name: {comic.api_detail_url}</h1>
			<h2>First Appearance: {comic.first_appeared_in_issue}</h2>
			<img src={comic.icon_url} alt={comic.icon_url} />
			<h3>Info: {comic.deck}</h3>
			<h4>Description: {comic.description}</h4>
		</div>
	);
};

export default ComicInfo;
