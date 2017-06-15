import React from "react";
import Request from "superagent";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

export class Header extends React.Component {


	render() {
		return(
			<nav className="navbar navbar-default">
						<center><h1 className="header">Povio Inventory</h1></center>
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><button className="btn btn-primary">Users</button></li>
							<li><button className="btn btn-primary">Inventory</button></li>
						</ul>
					</div>
				</div>
				<div>
					<h2>
						Programmers
						<Link to="/inventory/addnew"><button className="btn btn-success pull-right"><i className="fa fa-plus">Add</i></button></Link>
					</h2>
				
				</div>
			</nav>
			)
	}
}