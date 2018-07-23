import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //state가 바뀔때마다 component는 다시 render한다.
  //Render : componentWillMount () -> render -> componetntDidMout()
  //Update : componentReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> component 
  //state가 변하면 다시 render가 이루어 진다. 
  state = {}

  componentDidMount() {
    this._getMovies();
  }
  _getMovies= async() => {
    const movies = await this._callApi() //calApi작업이 완료되고 return
    this.setState({
      movies
    })
  }
  _callApi= () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json()) // fetch의 결과물만 갖는다.
    .then(json =>  json.data.movies
      /*
        this.setState({
          movies : json.data.movies
        }) call back hell! */
      
    )
    .catch(err => console.log(err))
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      console.log(movie)
      return <Movie title = {movie.title} poster = {movie.large_cover_image} key={index} />
    })
    return movies
  }
  render() {
    return (
      <div className="App">
        { /* 각 movie에 title이라는 이름으로 props 전달.  */ }
        {/* movies는 array이다. map! 기능은 새로운 array 만드는 것. */}
        {/* movies라는 array를 가져다가, current element is movie */}
        {/* 리액트는 element가 많을 경우 key라는 것을 줘야 한다. */}

        {this.state.movies ? this._renderMovies() : 'Loading'}
    </div>
    );
  }
}

export default App;