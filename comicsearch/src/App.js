import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ComicInfo from './components/ComicInfo';

function App() {
	const [comicData, setComicData] = useState({});

	const getComic = (characters) => {
		fetch(`https://comicvine.gamespot.com/api/characters/?api_key=976a615610f5757cbf1e12ceba7d6e5db194e594&sort=name&format=json`)
			.then((response) => response.json())
			.then((data) => {
				setComicData(data);
			});
	};

	useEffect(() => {
		getComic('Iron Man');
	}, []);

	const handleSubmit = (characters) => {
		getComic(characters);
	};

	return (
		<div className='App'>
			<Form handleSubmit={handleSubmit} />
			<ComicInfo comicData={comicData} />
		</div>
	);
}

export default App;
