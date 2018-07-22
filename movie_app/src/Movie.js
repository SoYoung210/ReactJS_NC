import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Movie.css';

class Movie extends Component {
	/* 타이틀, 포스터가 string 타입이라는 것을 명시. */
	/* React deprecated prop-types since 15.5.0. */
	static propTypes = {
		//title이 필수라는 점을 명시.
		title: PropTypes.string.isRequired,
		poster: PropTypes.string
	}
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
	//movie poster가 필수임을 명시하고 있음. 
	static propTypes = {
		poster : PropTypes.string.isRequired
	}
	render() {
		console.log(this.props);
		return (
			//dummy 이미지 셋팅하기.
			<img src = {this.props.poster} />
		)
	}
}
export default Movie;