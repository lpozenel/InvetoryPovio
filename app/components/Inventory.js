import React from "react";

import { SearchField } from "./SearchField"
import { Display } from "./Display"

export class Inventory extends React.Component {
	render() {
		return(
	<div>

		<SearchField/>
		<Display/>

  	</div>

		);
	}
}