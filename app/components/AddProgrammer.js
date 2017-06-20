import React from "react"
import Request from "superagent"
import {Link} from "react-router-dom"


export class AddProgrammer extends React.Component {
	constructor(props){
		super(props)
		this.state = {name: '', email: '', skills: '', location: '', expert: '1'};


		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeSkills = this.handleChangeSkills.bind(this);
		this.handleChangeLocation = this.handleChangeLocation.bind(this);
		this.handleChangeExpert = this.handleChangeExpert.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeName(event) {
		this.setState({name: event.target.value});
	}

	handleChangeEmail(event) {
		this.setState({email: event.target.value});
	}
	handleChangeSkills(event) {
		this.setState({skills: event.target.value});
	}
	handleChangeLocation(event) {
		this.setState({location: event.target.value});
	}
	handleChangeExpert(event) {
		this.setState({expert: event.target.value});
		console.log(this.state.expert);
	};

 
	handleSubmit(event) {
		Request.post('http://laravel.dev/v1/programmers').send({ name: `${this.state.name}`, email: `${this.state.email}`, skills: `${this.state.skills}`, location: `${this.state.location}`, expert: parseInt(this.state.expert, 10)}).set('Accept', 'application/json').end(function(err, res) {console.log(res)})
		alert('Programmer ' + this.state.name + ' was added!');
		event.preventDefault();
		this.setState({name:'', email: '', skills: '', location: '', expert: '1'})
	}

	render(){
		return(
		<div className="container">
            <h2>
                Programmers
                <Link to="/inventory"><button className="btn btn-danger pull-right"><i className="fa fa-chevron-left"></i> Back</button></Link>
            </h2>

			<form onSubmit={this.handleSubmit}>
				<div className="container">
					<div className="form-group row">
  						<label  className="col-2 col-form-label">Full name</label>
  							<div className="col-10">
    						<input required className="form-control" value={this.state.name} onChange={this.handleChangeName} type="text" placeholder="Full name"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">E-mail</label>
  							<div className="col-10">
    						<input required type="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} placeholder="E-mail"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">Skills</label>
  							<div className="col-10">
    						<input required className="form-control" value={this.state.skills} onChange={this.handleChangeSkills} type="text" placeholder="Skills"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">Location</label>
  							<div className="col-10">
    						<input required className="form-control" value={this.state.location} onChange={this.handleChangeLocation} type="text" placeholder="Location"/>
  						</div>
					</div>

  					<div className="form-group row">
  						<label className="col-2 col-form-label">Expert?</label>
  						<select required value={this.state.expert} onChange={this.handleChangeExpert} className="form-control">
							  <option value="1">Yes</option>
							  <option value="0">No</option>
						</select>
  					</div>

  					<div className="form-group row">
  					<button type="submit" className="btn btn-primary form-control">Submit</button>
  					</div>

				</div>
			</form>
		</div>
			)
		}

}
