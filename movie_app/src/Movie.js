import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
	render() {
		console.log(this.props);
		return ( 
		<div>
			<MoviePoster poster={this.props.poster}/>
			{/* JSX 는 명령을 수행하려면 괄호를 쳐야해. */}
			<h1>{this.props.title}</h1>
		</div>
		)
	}
}

class MoviePoster extends Component {
	render() {
		console.log(this.props);
		return (
			//dummy 이미지 셋팅하기.
			<img src = {this.props.poster} />
		)
	}
}
export default Movie;