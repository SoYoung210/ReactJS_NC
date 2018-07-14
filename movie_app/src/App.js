import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full-metal-jacket",
  "OldBoy",
  "StarWars"
]

const movieImages = [
  "https://imgc.allpostersimages.com/img/print/posters/the-matrix_a-G-8032466-0.jpg",
  "https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Fimg.posterlounge.co.uk%2Fimages%2Fwbig%2Fposter-alternative-full-metal-1698467.jpg&imgrefurl=https%3A%2F%2Fwww.posterlounge.co.uk%2Falternative-full-metal-jacket-fan-art-print-pr661051.html&docid=IGOMjN-ZX5Mt5M&tbnid=V_NDfJboMMazoM%3A&vet=10ahUKEwjuka2StZ7cAhXMa94KHWCoArQQMwg5KAQwBA..i&w=353&h=500&bih=930&biw=1643&q=full%20metal%20jacket%20poster&ved=0ahUKEwjuka2StZ7cAhXMa94KHWCoArQQMwg5KAQwBA&iact=mrc&uact=8",
  "https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41OAXAVK27L.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FOldboy-Poster-Danish-Min-sik-Dae-han%2Fdp%2FB001XVCETK&docid=BLpJTXv0-dPO0M&tbnid=gbfXKA1ID0pVnM%3A&vet=10ahUKEwjRiPSltZ7cAhWR-2EKHcZABuIQMwg3KAIwAg..i&w=348&h=500&bih=930&biw=1643&q=oldboy%20poster&ved=0ahUKEwjRiPSltZ7cAhWR-2EKHcZABuIQMwg3KAIwAg&iact=mrc&uact=8",
  "https://lumiere-a.akamaihd.net/v1/images/swtlj_imax_oversize_1-sht_v6_lg_d4edae12.jpeg?region=0%2C0%2C827%2C1200"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        { /* 각 movie에 title이라는 이름으로 props 전달.  */ }
        <Movie title = {movieTitles[0]} poster = {movieImages[0]}/>
        <Movie title = {movieTitles[1]} poster = {movieImages[1]}/>
        <Movie title = {movieTitles[2]} poster = {movieImages[2]}/>
        <Movie title = {movieTitles[3]} poster = {movieImages[3]}/>
      </div>
    );
  }
}

export default App;
