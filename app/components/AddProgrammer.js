import React from "react"
import Request from "superagent"


export class AddProgrammer extends React.Component {
	constructor(props){
		super(props)
		this.state = {name: '', email: '', skills: '', location: '', expert: ''};


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
	};


	handleSubmit(event) {
		Request.post('http://laravel.dev/v1/programmers').send({ name: `${this.state.name}`, email: `${this.state.email}`, skills: `${this.state.skills}`, location: `${this.state.location}`, expert: `${this.state.expert}`}).set('Accept', 'application/json').end(function(err, res) {console.log(res)})
		alert('Programmer ' + this.state.name + ' was added!');
		event.preventDefault();
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="container">
					<div className="form-group row">
  						<label  className="col-2 col-form-label">Full name</label>
  							<div className="col-10">
    						<input className="form-control" value={this.state.name} onChange={this.handleChangeName} type="text" placeholder="Full name"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">E-mail</label>
  							<div className="col-10">
    						<input className="form-control" value={this.state.email} onChange={this.handleChangeEmail} type="text" placeholder="E-mail"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">Skills</label>
  							<div className="col-10">
    						<input className="form-control" value={this.state.skills} onChange={this.handleChangeSkills} type="text" placeholder="Skills"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">Location</label>
  							<div className="col-10">
    						<input className="form-control" value={this.state.location} onChange={this.handleChangeLocation} type="text" placeholder="Location"/>
  						</div>
					</div>

  					<div className="form-check mb-2 mr-sm-2 mb-sm-0">
  						<select value={this.state.expert} onChange={this.handleChangeExpert}>
							  <option value="1">Yes</option>
							  <option value="0">No</option>
						</select>
  					</div>

  					<button type="submit" className="btn btn-primary">Submit</button>

				</div>
			</form>
			)
		}

}
