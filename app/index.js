import React from "react";
import Request from "superagent";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';


//Components
import{ Header }from "./components/Header";
import{ Inventory }from "./components/Inventory";
import{ Root }from "./components/Root";

class App extends React.Component {
	render () {

		return(
			<BrowserRouter>
				<Root/>
			</BrowserRouter>
		);	
	}
}
render(<App/>, window.document.getElementById("app"));