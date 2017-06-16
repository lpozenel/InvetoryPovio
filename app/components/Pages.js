import React from "react"
import ReactDOM from "react-dom";
import {Pagination} from "react-js-pagination";


export class Pages extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			activePage: 1
		};
	}

	handlePageChange(pageNumber) {
		console.log(`active page is ${pageNumber}`);
		this.setState({activePage: pageNumber});
	}
	
	render() {
		return(
				<Pagination
				activePage={this.state.activePage}
				itemsCountPerPage={10}
				totalItemsCount={450}
				pageRangeDisplayed={5}
				onChange={this.handlePageChange}
				/>

			);
	}

}