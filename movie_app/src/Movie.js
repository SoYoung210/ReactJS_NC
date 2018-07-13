import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
	render() {
		return ( 
		  <h1>hello this is a movie</h1>
		)
	}
}

class MoviePoster extends Component {
	render() {
		return (
			//dummy 이미지 셋팅하기.
			<img src = ""/>
		)
	}
}
export default Movie;