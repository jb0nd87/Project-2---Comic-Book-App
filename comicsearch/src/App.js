import React, { useState, useEffect } from 'react';
import './App.css';
import 'materialize-css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Card, Row, Col } from 'react-materialize'
import Form from './components/Form/Form';
// import ComicInfo from './components/ComicInfo';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About';
import Comics from './components/Comics';
import Header from './components/Header';
// import Chars from './components/Chars'
// import Card from './components/ComicCard'

function App() {
	// const [comicData, setComicData] = useState({});
	const [comicAPIResults, setComicAPIResults] = useState([]);
	const [filterResults, setFilterResults] = useState([]);
	const [formInput, setFormInput] = useState(null);
	const [isFilter, setIsFilter] = useState(false);

	const getComic = (characters) => {
		fetch(
			// need to figure out a better fix for CORS
			`https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters?api_key=976a615610f5757cbf1e12ceba7d6e5db194e594&format=json`
		)
			//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
			.then((response) => response.json())
			.then((data) => {
				// data.results
				setComicAPIResults(
					data.results.sort(function (a, b) {
						var nameA = a.name.toUpperCase(); // ignore upper and lowercase
						var nameB = b.name.toUpperCase(); // ignore upper and lowercase
						if (nameA < nameB) {
							return -1;
						}
						if (nameA > nameB) {
							return 1;
						}

						// names must be equal
						return 0;
					})
				);
				// console.log('this is results', data.results);
			});
	};

	useEffect(() => {
		getComic();
	}, []);

	const handleSubmit = (input) => {
		const filterArray = comicAPIResults.filter((hero) => {
			return input === hero.name;
		});
		setFilterResults(filterArray);
		setIsFilter(true);
		// getComic(characters);
		setFormInput(input);
	};
	console.log(comicAPIResults);
	return (
		<div className='App'>
			<nav>
				<Header />
				{/* <Link to='/Home'>
					<h2>Home</h2>
				</Link>
				<Link to='/Comics'>
					<h2>Characters</h2>
				</Link>
				<Link to='/About'>
					<h2>About</h2>
				</Link> */}
			</nav>
			<main>
				<Switch>
					<Route exact path='/Home'>
						<Home />
					</Route>
					{/* <Route>
						<Chars />
					</Route> */}
					<Route path='/Comics'>
						<Form handleSubmit={handleSubmit} formInput={formInput} />
						{!isFilter ? (
							<Comics comicData={comicAPIResults} />
						) : (
							<Comics comicData={filterResults} />
						)}
					</Route>
					<Route path='/About'>
						<About />
					</Route>
				</Switch>
			</main>
			{/* <div>This is the input value from the form: {formInput}</div> */}

			{/* <Comics comicData={comicAPIResults}/> */}
			{/* this maps the data from the API but i need to figure out where to actually map it to in order to pull out individual data from the form */}
			{/* {comicAPIResults.map((comic) => {
				return <ComicInfo comicData={comic} />;
			})} */}
		</div>
	);
}

export default App;
