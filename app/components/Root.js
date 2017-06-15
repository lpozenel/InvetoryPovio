import React from "react";

//Components
import { Main } from "./Main";
import { Header } from "./Header";

export class Root extends React.Component {
	render() {
		return(
			    <div>
			    	<Header/>
    				<Main/>
			    </div>
		);
	}
}