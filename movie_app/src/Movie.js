import React from 'react';
import PropTypes from "prop-types";
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'
/*
class Movie extends Component {
	// 타이틀, 포스터가 string 타입이라는 것을 명시. 
	// React deprecated prop-types since 15.5.0. 
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
			// JSX 는 명령을 수행하려면 괄호를 쳐야해. 
			<h1>{this.props.title}</h1>
		</div>
		)
	}
}*/

function Movie({title, poster, genres, synopsis}) {
	return ( 
		<div className = "Movie">
			<div className = "Movie__Column">
				<MoviePoster poster={poster} alt={title}/>
			</div>
			<div className = "Movie__Column">
				<h1>{title}</h1>
				<div className = "Movie__Genres">
					{genres.map((genre,index) => 
							<MovieGenre genre = {genre}
										key = {index} />
					)}
				</div>
				<div className= "Movie__Synopsis">
					<LinesEllipsis
						text={synopsis}
						maxLine='3'
						ellipsis='...'
						trimRight
						basedOn='letters'
						/> 
				</div>
			</div>
			{/* JSX 는 명령을 수행하려면 괄호를 쳐야해. */}
			
		</div>
	)
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
function MovieGenre({genre}) {
	return (
		<span className ="Movie__Genre"> </span>
	)
}
function MoviePoster({poster, title}){
	//오직 poster만 필요하고 바로 return만 하는 것. 굳이 class로 만들 이유가 없다.
	return (
		<img src = {poster} alt = {title} className="Movie__Poster"/>
	)
}
MovieGenre.propTypes = {
	genre : PropTypes.string.isRequired
}
MoviePoster.propTypes = {
	poster : PropTypes.string.isRequired,
	alt : PropTypes.string.isRequired
}
/*
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
*/

export default Movie;