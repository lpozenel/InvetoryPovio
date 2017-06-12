import React from "react";

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
							<li><button className="btn btn-success pull-right">Add</button></li>
						</ul>
					</div>
				</div>
			</nav>
			)
	}
}