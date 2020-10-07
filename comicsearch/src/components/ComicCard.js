import React from 'react';
import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize'
// import ComicInfo from '../components/ComicInfo';

const ComicCard = (props) => {

return (
	 <div class="row">
    	<div class="col s12 m7">
      		<div class="card">
        		<div class="card-image">
          			<img src="images/sample-1.jpg">
          			<span class="card-title">Card Title</span>
        		</div>
        		<div class="card-content">
          			<p>I am a very simple card. I am good at containing small bits of information.
          			I am convenient because I require little markup to use effectively.</p>
        		</div>
        		<div class="card-action">
          			<a href="#">This is a link</a>
       		 	</div>
     		</div>
    	</div>
  	</div>
)
}
export default ComicCard
