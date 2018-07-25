import React, { Component , Fragment } from 'react';
import { createPortal } from 'react-dom'
import logo from './logo.svg';
import './App.css';

class ErrorMaker extends Component {
  state = {
    friends : ["hjk", "jsy", "money"]
  }
  componentDidMount = () => {
    setTimeout(()=>{
      this.setState({
        friends : undefined
      });
    },2000);
  }
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend}`)
  }
}

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
const ErrorCallback = () => "Something is wrong";
class App extends Component {
  state = {
    hasError : false
  };
  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info is i have is ${JSON.stringify(info)}`);
    this.setState({
      hasError : true
    });
  };
  render() {
    return (
      <div className="App">
        <Fragment>
          <ReturnTypes />
          <Portals />
          {hasError ? <ErrorCallback/> : <ErrorMaker/>}
        </Fragment>
      </div>
    );
  }
}

export default App;
