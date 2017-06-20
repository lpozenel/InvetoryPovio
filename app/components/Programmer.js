import React from "react";
import { Link } from "react-router-dom"
import Request from "superagent"

export class Programmer extends React.Component {

	ifExpert(props) {
    var expert = props;

    if (expert) {
        return(<i className="fa fa-check fa-2x fa-fw tick"></i>);
        } 
    }

    deleteProgrammer(id) {
        Request.delete(`http://laravel.dev/v1/programmers/${id}`).set('Accept', 'application/json').end(function(err, res) {})
        alert("It's done, just refresh the page!:D ");
    }

	render(){


		return(
		<li className="list-group-item">
			<div className="row">
                <div className="col-sm-2">
                    <Link to={`/edit/${this.props.programmer.programmerId}`}>{this.props.programmer.name}</Link>
                </div>
                <div className="col-sm-2">
                    <p>{this.props.programmer.email}</p>
                </div>
                <div className="col-sm-2">
                    <p>{this.props.programmer.skills}</p>
                </div>
                <div className="col-sm-2">
                    <p>{this.props.programmer.location}</p>
                </div>
                <div className="col-sm-2">
                    <p>{this.ifExpert(this.props.programmer.expert)}</p>
                </div>
                <div className="col-sm-2">
                    <button onClick={() => this.deleteProgrammer(this.props.programmer.programmerId)} className="btn btn-danger"><i className="fa fa-times fa-2x fa-fw"></i></button>
                </div>
            </div>
        </li>
		)
	}
}