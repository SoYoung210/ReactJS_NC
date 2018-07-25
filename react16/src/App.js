import React, { Component , Fragment } from 'react';
import { createPortal } from 'react-dom'
import logo from './logo.svg';
import './App.css';
//setState null 스테이트를 업데이트하지도, 컴포넌트를 업데이트 하지도 않음. 

const MAX_PIZZA = 20;

const eatPizza = (state, props) => {
  const { pizza } = state;
  if(pizza < MAX_PIZZA) {
    return {
      pizza : pizza +1
    };
  }else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    pizza : 0
  };
  render() {
    const {pizza} = this.state;
    return (
      <button onClick = {this._handleClick}>
        {`I have eaten ${pizza} ${pizza ===1 ? "pizza" : "pizzas"}`}
      </button>
    );
  }
  _handleClick = () => {
    this.setState(eatPizza);
  }
}

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
          <Controlled/>
          <ReturnTypes />
          <Portals />
        
        </Fragment>
      </div>
    );
  }
}


export default App;
