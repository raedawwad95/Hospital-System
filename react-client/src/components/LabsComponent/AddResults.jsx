import React, { Component } from 'react';
import $ from 'jquery';

export class AddResult extends Component {
	constructor(props){
		super(props);
		this.satate={
			patientId:'',
			labTechnicianId:'',
			medicalExaminationTime:'',
			resultEntryTime:'',
			imageOfResult:'',
			description:''

	
		}
		this.addResult=this.addItem.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}

		handleChange(e){
			this.setState({
		 	[e.target.name]: e.target.value 
			});
		}
		addResult(){
			var that=this;
			var obj={
				patientId:this.state.patientId,
				labTechnicianId:this.state.labTechnicianId,
				medicalExaminationTime:this.state.medicalExaminationTime,
				resultEntryTime:this.state.resultEntryTime,
				imageOfResult:this.state.imageOfResult,
				description:this.state.description

			}
				$.ajax({
					url:'/LabsResult/create',
					method:'POST',
					data:obj,
				
					success: (data) => {
					
					this.setState({
						patientId:'',
						labTechnicianId:'',
						medicalExaminationTime:'',
						resultEntryTime:'',
						imageOfResult:'',
						description:''
					})

					},
					error: (err) => {
					console.log('err', err);
					}
				});
		}



	render() {
		return (
			<div>
				<h2>patientId : <input placeholder="patientId" name="patientId" onChange={this.handleChange}/></h2>
                <br/><br/>
                <h2>labTechnicianId : <input placeholder="labTechnicianId" name="labTechnicianId" onChange={this.handleChange}/></h2>
                <br/><br/>
                <h2>medicalExaminationTime : <input placeholder="medicalExaminationTime" name="medicalExaminationTime" onChange={this.handleChange}/></h2>
                 <br/><br/>
                <h2>resultEntryTime : <input placeholder="resultEntryTime" name="resultEntryTime" onChange={this.handleChange}/></h2>
                 <br/><br/>
                <h2>imageOfResult : <input placeholder="imageOfResult" name="imageOfResult" onChange={this.handleChange}/></h2>
                <br/><br/>
                 <h2>description : <input placeholder="description" name="description" onChange={this.handleChange}/></h2>
                 <br/><br/>

                 <div><button onClick ={this.addResult} > addResult </button></div>




			</div>
		);
	}
}




export default AddResult;