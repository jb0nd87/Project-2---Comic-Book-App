import React from 'react';
import ComicInfo from './ComicInfo/ComicInfo';

const Comics = (props) => {
	// const [comicAPIResults, setComicAPIResults] = useState([]);
	console.log('comics', props.comicData.comicData);
	const renderComicData = () => {
		return props.comicData
			? props.comicData.map((comic) => {
					return <ComicInfo comicData={comic} />;
			  })
			: '';
	};
	return <>{renderComicData()}</>;
};

export default Comics;
