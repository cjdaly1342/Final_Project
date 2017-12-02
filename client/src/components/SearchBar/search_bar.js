import React, { Component } from 'react';
import "./search_bar.css";

class SearchBar extends Component {  // Component has its own constructor function
	constructor(props) {  // This initializes the state using the javascript constructor function
		super(props);	  // The constructor function is reserved for initializing variables and states

		this.state = { term: ''};  // when we use state we initialize it by using this.state
					
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					placeholder="Search" />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;

// We can only update state by using this.setState