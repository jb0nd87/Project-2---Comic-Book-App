import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ComicInfo from './components/ComicInfo';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import Comics from './components/Comics';

function App() {
	const [comicData, setComicData] = useState({});
	const [comicAPIResults, setComicAPIResults] = useState([]);
	const [formInput, setFormInput] = useState(null);

	const getComic = (characters) => {
		fetch(
			// need to figure out a better fix for CORS
			`https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters?api_key=976a615610f5757cbf1e12ceba7d6e5db194e594&format=json`
		)
			.then((response) => response.json())
			.then((data) => {
				setComicAPIResults(data.results);
				// console.log('this is results', data.results)
			});
	};

	useEffect(() => {
		getComic();
	}, []);

	const handleSubmit = (input) => {
		// getComic(characters);
		setFormInput(input);
	};

	return (
		<div className='App'>
			<nav>
				<Link to='/Home'>
					<h2>Home</h2>
				</Link>
				<Link to='/Comics'>
					<h2>Comics</h2>
				</Link>
				<Link to='/About'>
					<h2>About</h2>
				</Link>
			</nav>
			<main>
				<Switch>
					<Route exact path='/Home'>
						<Home />
					</Route>
					{/* <Route path='/Comics'>
						<Comics />
					</Route> */}
					<Route path='/About'>
						<About />
					</Route>
				</Switch>
			</main>
			{/* <div>This is the input value from the form: {formInput}</div> */}
			<Form handleSubmit={handleSubmit} formInput={formInput} />
			{/* this maps the data from the API but i need to figure out where to actually map it to in order to pull out individual data from the form */}
			{comicAPIResults.map((comic) => {
				return <ComicInfo comicData={comic} />;
			})}
		</div>
	);
}

export default App;
