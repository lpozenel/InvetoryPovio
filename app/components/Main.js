import React from "react";
import Request from "superagent";
import { Switch, Route } from 'react-router-dom'


//Components
import { Display } from "./Display";
import {Inventory } from "./Inventory";
import { AddProgrammer } from "./AddProgrammer";


export class Main extends React.Component {
	render() {
		return(
				<Switch>
					<Route exact path='/' component={Display}/>
					<Route exact path='/inventory' component={Inventory}/>
					<Route exact path='/inventory/addnew' component={AddProgrammer}/>
				</Switch>
		);
	}
}