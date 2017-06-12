import React from "react";

export class Inventory extends React.Component {
	render() {
		return(
	<div>
		<form className="navbar-form" role="search">
    	<div className="input-group add-on">
      		<input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"/>
      		<div className="input-group-btn">
        	<button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
      		</div>
   		</div>
  		</form>

  	</div>

		);
	}
}