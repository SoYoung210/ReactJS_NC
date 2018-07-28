import React, { Component , Fragment } from 'react';

//const Component = React.Component
/*
const SearchBar = () => {
    return <input type="text"/>
}
*/

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {term : ''}; //여기에 값을셋팅 하는건 placeholder 와는 다름. 실제 값임.
    }

    render() {
        return (
            <div className = "search-bar">
                <input
                    value = {this.state.term} // 이러니까.
                    onChange={event => this.onInputChange(event.target.value)} type="text"/>
            </div>
        );
    }

    onInputChange = (event) => {
        this.setState({term})
        this.props.onSearchTermCahgne(term)
    }
}

export default SearchBar;