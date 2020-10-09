# Project Overview

## Project Links

- [Link to github repo](https://github.com/jb0nd87/Project-2---Comic-Book-App)
- [Netlify link](https://comic-search.netlify.app)

## Project Description

I want to build a search app to a comic book database. I want the look and functionality to be similar to the Marvel site...but more simplified. The cards will render looking like the comic book and open up to show the details.

- [Marvel Site](https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12)

## API

I found the Comicvine API that returns data. The data from Comicvine comes out in XML format so I have to figure out how to render the data without json.

```
{
"error": "OK",
"limit": 100,
"offset": 0,
"number_of_page_results": 100,
"number_of_total_results": 140356,
"status_code": 1,
"results": [
{
"aliases": null,
"api_detail_url": "https://comicvine.gamespot.com/api/character/4005-164503/",
"birth": null,
"count_of_issue_appearances": 1,
"date_added": "2020-09-17 10:26:52",
"date_last_updated": "2020-09-17 10:26:52",
"deck": null,
"description": null,
"first_appeared_in_issue": {
"api_detail_url": "https://comicvine.gamespot.com/api/first_appeared_in_issue/4000-706899/",
"id": 706899,
"name": "HC/TPB",
"issue_number": "1"
},

```

## Wireframes

Here are my wireframes for how I would like the finished app to look like.

- [Wireframes](https://wireframepro.mockflow.com/editor.jsp?editor=on&publicid=M691d78876174be864032a631e0b2cf761601641559109&perm=Create&projectid=Mdff3e867f4589556f14f364e92015cab1601641751834&ptitle=Comic%20app&bgcolor=white&category=Ma075999a4338333eed91b3af8ac6507f1583824829811&store=yes#/page/d9f1e7c5497746d8a0d668bedde05334)
- [React Architecture](https://res.cloudinary.com/dv01780vo/image/upload/v1601909000/IMG_20201005_074121_ybsc74.jpg)
- [Time/Priority Matrix](https://res.cloudinary.com/dv01780vo/image/upload/v1601908425/IMG_20201005_073126_tyfz1o.jpg)

### MVP/PostMVP - 5min

<!-- The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.   -->

#### MVP

- Find an use external api
- Render data on page
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component    |                          Description                          |
| ------------ | :-----------------------------------------------------------: |
| App          | This will make the initial data pull and include React Router |
| Header       |          This will render the header include the nav          |
| Comic        |          This will show the first comic on the page           |
| Comic Filter |         This will render the Comic Cards in the body          |
| Footer       |          This will render the header include the nav          |

<!-- Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize. -->

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: | :------------: | :-----------: | :---------: |
| App          |    H     |     10hrs      |     6hrs      |    10hrs    |
| Header       |    M     |      3hrs      |     2hrs      |    4hrs     |
| Comics       |    H     |     10hrs      |     10hrs     |    12hrs    |
| Comic Filter |    H     |     10hrs      |      hrs      |    8hrs     |
| Footer       |    L     |      3hrs      |     3hrs      |    3hrs     |
| Total        |    H     |     36hrs      |     31hrs     |    37hrs    |

## Additional Libraries

I used react bootstrap for my navbar.

## Code Snippet

The thing that got me the most excited was when I got the .map function to work and return data with the help of Joe and also another friend of mine.

```
const Comics = (props) => {
	// const [comicAPIResults, setComicAPIResults] = useState([]);
	console.log('comics', props.comicData);
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

```
