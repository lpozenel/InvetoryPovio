import Search from 'react-search'
import React from "react";
 
export class SearchField extends React.Component {

    doSearch(){
        var query=this.refs.searchInput.findDOMNode().value; // this is the search text
        this.props.doSearch(query);
    }
    render(){
        return <input type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>
    }
}

    
