# Project Overview

## Project Links

- [Link to github repo](https://github.com/jb0nd87/Project-2---Comic-Book-App)
- [add your deployment link]()

## Project Description

I want to build a search app to a comic book database. I want the look and functionality to be similar to the Marvel site...but more simplified. The cards will render looking like the comic book and open up to show the details.

- [Marvel Site](https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12)

## API

I found the Comicvine API that returns data. The data from Comicvine comes out in XML format so I have to figure out how to render the data without json.

```
<response>
<error>
<![CDATA[ OK ]]>
</error>
<limit>100</limit>
<offset>0</offset>
<number_of_page_results>100</number_of_page_results>
<number_of_total_results>753407</number_of_total_results>
<status_code>1</status_code>
<results>
<issue>
<aliases/>
<api_detail_url>
<![CDATA[ https://comicvine.gamespot.com/api/issue/4000-6/ ]]>
</api_detail_url>
<cover_date>
<![CDATA[ 1952-10-01 ]]>
</cover_date>
<date_added>2008-06-06 11:10:16</date_added>
<date_last_updated>2015-07-11 12:08:20</date_last_updated>
<deck/>
<description>
<![CDATA[ <p>The horrors of:</p><p>- Lost race!</p><p>- The man germ!</p><p>- Man in the hood!</p><p>- The things!</p><p>-Stories behind the stars, featuring the legendary battle between Hercules, Hydra and Iolaus!</p><p>Plus, two page long prose-stories.</p> ]]>
</description>
```


## Wireframes

Here are my wireframes for how I would like the finished app to look like.

- [Wireframes](https://wireframepro.mockflow.com/editor.jsp?editor=on&publicid=M691d78876174be864032a631e0b2cf761601641559109&perm=Create&projectid=Mdff3e867f4589556f14f364e92015cab1601641751834&ptitle=Comic%20app&bgcolor=white&category=Ma075999a4338333eed91b3af8ac6507f1583824829811&store=yes#/page/d9f1e7c5497746d8a0d668bedde05334)
- [add link to your react architecture]()


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

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Comic | This will show the first comic on the page |
| Comic Cards | This will render the Comic Cards in the body |
| Footer | This will render the header include the nav | 


<!-- Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize. -->

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 5hrs| hrs | hrs |
| Working with API | H | 5hrs| hrs | hrs |
| Comics Rendered | H | 5hrs | hrs | hrs |
| Favorites | L | 3hrs | hrs | hrs |
| Total | H | 13hrs| 5hrs | 5rs |

## Additional Libraries
 <!-- Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.  -->

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
