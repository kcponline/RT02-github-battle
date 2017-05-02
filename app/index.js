// 01 first to put in
var React = require('react');
// 02 to render
var ReactDOM = require('react-dom');
// 03 css styling in the index.css will be included in this
require('./index.css');

// 04 original way but deprecated
// React.createClass()

// 06 3 other things or properties to have in the component
// state
// lifecycle event - for example showing or removing from the screen
// UI - most important, required, a component might not have state or lifecycle but must have UI
// and the way to set the UI is by defining the render in the component

// 05 the modern or contemporary way is this way with ES6; notice the signature of ES6 is class syntax in the beginning of defining the component
// and the name of the component is App
class App extends React.Component {
	// 07 defining how or what UI will look like with render method
	render(){
		return(
			// combining regular html with javascript
			// although typically the doctrine is separation of concerns
			// but with the component, the concern is the UI and any functionality with the UI
			// in practice there will be many many components and so separating the functions would create exponentially too many files and very difficult to associate
			// although this looks like html, this is known as jsx in react
			<div>
				Hello React Training!
			</div>
			)
	}
}

// // 08 when transformed by babel the above code will become like below
// class App extends React.Component {
// 	// notice how this now looks like a prototype or an object but now is entirely javascipt without html tags
// 	// by contrast, jsx just allows for html syntax be mixed with javascript for legacy users who are more familiar with html
// 	render(){
// 		return React.createElement(
// 			"div",
// 			null,
// 			"Hellow World!"
// 			);
// 	}
// }

// 09 to take the component as defined above and render it to the DOM
ReactDOM.render(
	// what to render
	<App />,
	// where to render to
	// but at this point, this just means that there will have to be a html file with an id of app for rendering
	document.getElementById('app')
	);