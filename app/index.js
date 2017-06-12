import React from "react";
import{ render }from "react-dom";
import { Router, Route, browserHistory} from "react-router";

//Components
import{ Header }from "./components/Header";
import{ Inventory }from "./components/Inventory";
import{ Baby } from "./components/Baby";
class App extends React.Component {
	render () {
				var userData = [{
				name: "Luka Poženel",
				email: "pozenel3@gmail.com",
				skills: ["ReactJS", ", HTML", ", CSS" ],
				location: "Ljubljana",
				expert: false
			},

			{
				name: "Luka Gregor",
				email: "lgregorn@gmail.com",
				skills: ["ReactJS", ", HTML", ", CSS" ],
				location: "Ljubljana",
				expert: true
			}];

		return(
		<div className="container">
			<Header/>
			<Inventory/>
			<Baby/>
		</div>
		);	
	}
}
render(<App/>, window.document.getElementById("app"));