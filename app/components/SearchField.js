import Search from 'react-search'
import React from "react";
 
export class SearchField extends React.Component {

    doSearch(){
        var query=this.refs.searchInput.findDOMNode().value; // this is the search text
        this.props.doSearch(query);
    }
    render(){
        return (
        <div className="container">
            <div className="input-group add-on">
                <input className="form-control" placeholder="Search" value={this.props.query} onChange={this.doSearch} ref="searchInput" type="text"></input>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
              </div>
            </div>
        </div>
      )
    }
}

    
