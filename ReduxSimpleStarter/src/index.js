import React, { Component , Fragment } from 'react';
import ReactDOM from "react-dom"

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

import YTSearch from 'youtube-api-search'
import VideoDeatil from './components/video_detail';

const API_KEY = "AIzaSyDJHfBft96VhgqEQP6oCn2h5ayYS82OUro";

// Create a new Component This component should produce
// some html
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos : []};
        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
           this.setState({videos}) //key 와 vlaue 이름이 같을 ㄸ. 
           //this.setState({videos : videos })
        })       
    }
    //즉시 렌더링 되는 바람에 video[0]이렇게 접근하면 undef
    render() {
        return (
            <Fragment>
                <SearchBar />
                <VideoDeatil video={this.state.videos[0]}/>>
                <VideoList videos={this.state.videos} /> 
            </Fragment>
        );
    }
}

/*
const App = () => {
    return (
        <Fragment>
            <SearchBar />
        </Fragment>
    );
}
*/
// take this component's generated html and put it 
// on the page (int the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
