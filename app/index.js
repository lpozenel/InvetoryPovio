import React from "react";
import{ render }from "react-dom";
import { Router, Route, browserHistory} from "react-router";

//Components
import{ Header }from "./components/Header";
import{ Home }from "./components/Home";
class App extends React.Component {
	render () {

		return(
		<div className="container">
			<Header/>
			<Home/>
		</div>
		);	
	}
}
render(<App/>, window.document.getElementById("app"));