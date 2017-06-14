import React from "react"


export class AddProgrammer extends React.Component {

	render(){
		return(
				<div className="container">
					<div className="form-group row">
  						<label  className="col-2 col-form-label">Full name</label>
  							<div className="col-10">
    						<input className="form-control" type="text" placeholder="Full name" id="example-text-input"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">E-mail</label>
  							<div className="col-10">
    						<input className="form-control" type="text" placeholder="E-mail" id="example-text-input"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">Skills</label>
  							<div className="col-10">
    						<input className="form-control" type="text" placeholder="Skills" id="example-text-input"/>
  						</div>
					</div>

					<div className="form-group row">
  						<label className="col-2 col-form-label">Location</label>
  							<div className="col-10">
    						<input className="form-control" type="text" placeholder="Location" id="example-text-input"/>
  						</div>
					</div>

  					<div className="form-check mb-2 mr-sm-2 mb-sm-0">
    					<label className="form-check-label">
      						<input className="form-check-input" type="checkbox"/> Yes, he is expert!
   						</label>
  					</div>

  					<button type="submit" className="btn btn-primary">Submit</button>

				</div>
			)
		}

}
