import React, { Component , Fragment } from 'react';
import { createPortal } from 'react-dom'
import logo from './logo.svg';
import './App.css';

const BoundaryHC = ProtectedComponent => class Boundar extends Component {
  state = {
    hasError : false
  };
  componentDidCatch = () => {
    this.setState({
      hasError: true
    })
  };
  render() {
    const { hasError } = this.state;
    if(hasError) {
      return <ErrorCallback />
    }else {
      return <ProtectedComponent />
    }
  }
}

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

const PErrorMaker = BoundaryHC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal (
      <Message />, document.getElementById("touchme")
    );
  }
}
const PPortals = BoundaryHC(Portals);

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
  render() {
    return (
      <div className="App">
        <Fragment>
          <ReturnTypes />
          <Portals />
          <ErrorMaker/>
        </Fragment>
      </div>
    );
  }
}


export default App;
