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
            <Fragment>
                <input
                    value = {this.state.term} // 이러니까.
                    onChange={this.onInputChange} type="text"/>
            </Fragment>
        );
    }

    onInputChange = event => this.setState({term : event.target.value})
}

export default SearchBar;