import React, { Component , Fragment } from 'react';
import { createPortal } from 'react-dom'
import logo from './logo.svg';
import './App.css';

class Portals extends Component {
  render() {
    return createPortal (
      <Message />, document.getElementById("touchme")
    );
  }
}

const Message = () => "just touched it";

//React 16 에서 string 리턴 가능 
class ReturnTypes extends Component {
  render() {
    return (
      "hello world"
    );
  }
}
//React 16 에서 Fragment 리턴 가능 
/*
class ReturnTypes extends Component {
  render() {
    return (
      <Fragment>
        <header></header>
      </Fragment>
    );
  }
}
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <ReturnTypes />
          <Portals />
        </Fragment>
      </div>
    );
  }
}

export default App;