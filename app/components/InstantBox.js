import Search from 'react-search'
import React from "react"

import { SearchField } from "./SearchField"
import { Display } from "./Display"


export class InstantBox extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            query:'',
            filteredData: this.props.data
        };
    }

    doSearch(queryText){
        console.log(queryText)
        //get query result
        var queryResult=[];
        this.props.data.forEach(function(person){
            if(person.name.toLowerCase().indexOf(queryText)!=-1)
            queryResult.push(person);
        });
 
        this.setState({
            query:queryText,
            filteredData: queryResult
        })
    }
    render(){
        console.log(this.state)
        return (
            <div className="InstantBox">
                <h2>Search users</h2>
                <SearchField query={this.state.query} doSearch={this.doSearch}/>
                <Display data={this.state.filteredData}/>
            </div>
        );
    }
}