import Search from 'react-search';
import React from "react";
import Request from "superagent";
import {Link} from "react-router-dom";

export class Display extends React.Component {

    constructor(){
            super();
            this.state = {user:[]};
        }

    ifExpert(props) {
    var expert = props;

        if (expert) {
            return(<i className="fa fa-check fa-2x fa-fw tick"></i>);
        } 
    }

    componentWillMount() {
    var url = "http://laravel.dev/v1/programmers";
    Request.get(url).then((response) => {
        this.setState({
            user:response.body
        })
    })
    }

    render(){
        return(
        //making the rows to display

        <div className="container">
            <h2>
                Programmers
                <Link to="/inventory/addnew"><button className="btn btn-success pull-right"><i className="fa fa-plus"></i> Add</button></Link>
            </h2>
                
                
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

            {this.state.user.map((user, i) =><li className="list-group-item" key={i}>
            <div className="row">
                <div className="col-sm-2">
                    <p>{user.name}</p>
                </div>
                <div className="col-sm-2">
                    <p>{user.email}</p>
                </div>
                <div className="col-sm-2">
                    <p>{user.skills}</p>
                </div>
                <div className="col-sm-2">
                    <p>{user.location}</p>
                </div>
                <div className="col-sm-2">
                    <p>{this.ifExpert(user.expert)}</p>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-danger"><i className="fa fa-times fa-2x fa-fw"></i></button>
                </div>
            </div>
            </li>)}
            </ul>
            </div>
        )
    }
}