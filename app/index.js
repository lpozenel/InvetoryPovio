import React from "react";
import{ render }from "react-dom";
import { Router, Route, browserHistory} from "react-router";

//Components
import{ Header }from "./components/Header";
import{ Inventory }from "./components/Inventory";
class App extends React.Component {
	render () {

		return(
		<div className="container">
			<Header/>
			<Inventory/>
		</div>
		);	
	}
}
render(<App/>, window.document.getElementById("app"));