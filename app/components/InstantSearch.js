import React from "react";
import { Link } from "react-router-dom"

import { Programmer } from "./Programmer"

export class InstantSearch extends React.Component {

    constructor(){
            super();
            this.state = {
            	search: ''
        };

        this.updateSearch = this.updateSearch.bind(this);
    }


    updateSearch(event){
    	this.setState({search: event.target.value.substr(0,20)});
    }


    render(){
    	let filteredProgrammers = this.props.programmers.filter(
    			(programmer) => {
    				return programmer.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    			}
    		);
    return(
    	<div className="container">
			  <form className="" role="search">
			    
			   	<span>
			      <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" type="text"
    				value={this.state.search}
    				onChange={this.updateSearch}/>
    				
			    </span>
			    
			  </form>
              <br/>
    		
    	<div>
    		<ul className="list-group">
    		<li className="list-group-item">
            <div className="row">
                <div className="col-sm-2">
                    <b><p>Full name</p></b>
                </div>
                <div className="col-sm-2">
                    <b><p>E-mail</p></b>
                </div>
                <div className="col-sm-2">
                    <b><p>Skills</p></b>
                </div>
                <div className="col-sm-2">
                    <b><p>Location</p></b>
                </div>
                <div className="col-sm-2">
                    <b><p>Expert</p></b>
                </div>
                <div className="col-sm-2">
                    <b><p>Delete</p></b>
                </div>
            </div>

            </li>
    		 {filteredProgrammers.map((programmer)=> {
    		 	return <Programmer programmer={programmer} key={programmer.name}/>
    		 })}
    		</ul>
    	</div>
    	</div>
    	    	)
	}
}