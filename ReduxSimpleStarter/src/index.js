import React from "react"
import ReactDOM from "react-dom"
// Create a new Component This component should produce
// some html
const App = function() {
    return <div> "hi" </div>;
}

// take this component's generated html and put it 
// on the page (int the dom)
ReactDOM.render(<App />);
