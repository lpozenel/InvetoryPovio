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
							<li><Link to="/"><button className="btn btn-primary btn-lg"><i className="fa fa-users"></i> Programmers</button></Link></li>
							<li><Link to="/inventory"><button className="btn btn-primary btn-lg"><i className="fa fa-list"></i> Inventory</button></Link></li>
						</ul>
					</div>
				</div>
				
			</nav>
			)
	}
}