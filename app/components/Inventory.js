import React from "react";
import Request from "superagent";

import { InstantSearch } from "./InstantSearch"
import { Pages } from "./Pages"

export class Inventory extends React.Component {

	constructor(){
            super();
            this.state = {user:[]};
        }


	componentWillMount() {
    var url = "http://laravel.dev/v1/programmers";
    Request.get(url).then((response) => {
        this.setState({
            user:response.body
        })
    })
   }

	render() {
		return(
	<div>

		<InstantSearch programmers={this.state.user}/>

  	</div>

		);
	}
}