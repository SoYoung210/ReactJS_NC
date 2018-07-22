import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //state가 바뀔때마다 component는 다시 render한다.
  //Render : componentWillMount () -> render -> componetntDidMout()
  //Update : componentReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> component 
  //state가 변하면 다시 render가 이루어 진다. 
  state = {

  }
  
  componentDidMount() {
    setTimeout(() => {
      console.log('hello')
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster : "https://imgc.allpostersimages.com/img/print/posters/the-matrix_a-G-8032466-0.jpg"
          },
          {
            title : "full metal jacket",
            poster : "https://cdn6.bigcommerce.com/s-o6vy9cv/products/133794/images/130067/501942__13636.1519287165.500.500.jpg?c=2"
          },
          {
            title : "OldBoy",
            poster : "https://cf5.s3.souqcdn.com/item/2016/05/17/10/74/99/15/item_XL_10749915_14378548.jpg"
          },
          {
            title: "StarWars",
            poster: "https://lumiere-a.akamaihd.net/v1/images/swtlj_imax_oversize_1-sht_v6_lg_d4edae12.jpeg?region=0%2C0%2C827%2C1200"
          },
          {
            title : "Transporting",
            poster: "https://imgc.allpostersimages.com/img/print/posters/the-matrix_a-G-8032466-0.jpg"
          }
        ]
      })
    }, 5000);
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })   
    return movies;
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key={index} />
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
