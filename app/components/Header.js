import React from "react";

export class Header extends React.Component {
	render() {
		return(
			<nav className="navbar navbar-default">
						<center><h1 className="header">Povio Inventory</h1></center>
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><a href="C:\Users\Luka\ReactJS\src\app\components/Home.js" className="btn btn-default"> Users </a></li>
							<li><a href="C:\Users\Luka\ReactJS\src\app\components/Inventory.js"className="btn btn-default"> Inventory </a></li>
						</ul>
					</div>
				</div>
			</nav>
			)
	}
}