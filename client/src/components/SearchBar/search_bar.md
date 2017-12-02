// import React from 'react';
// import ReactDOM from 'react-dom';

// This is a JSX Class, we use this instead of the way we had written it before
// const SearchBar = () => {
// 	return <Input />
// }
// This means define a new class called SearchBar and give it access to all of the functionality
// that React.Component has.  It gives the SearchBar a bunch of functionality that React.Component
// has
class SearchBar extends React.Component {
	render() {	// render() is a method used to render the js into HTML, all JSX has 			 //	to have a render method
 	return <input />;
	}
}

// export default SearchBar;

// The better syntax to use for this code will look like this
// =========================================================================================
import React, { Component } from 'react'; // Notice the change here, we added { Component }

class SearchBar extends Component { // And took React.Component out of this section
 	render() {
 		return <input onChange={this.onInputChange} />; // {this.onInputChange} tells 													// what to happen when input changes
 	}

	onInputChange(event) { // Event Handler, whenever the input changes run the code 						//	here
 		console.log(event.target.value);
 	}
 }

export default SearchBar;

// Handling an Event in React has Two Steps
// 1 - Declare an Event Handler: An Event Handler is a function ran whenever an event occurs
// 2 - Pass the event handler to the element we want to monitor when the event occurs

// Again, cleaner syntax that accomplishes the same thing that we did in the above code
// ==========================================================================================

    <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css">