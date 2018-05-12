import  React from 'react';


class MedicalRecords extends React.Component{
	constructor(props){
		super(props);
		this.state={
			patientId:'', 
			doctorId : '',
			description:'',
			image: ''
		}
		this.handleChange=this.handleChange.bind(this);
		this.addMedicalRecords=this.addMedicalRecords.bind(this);
	}
	handleChange(e){
		this.setState({
		[e.target.name]:e.target.value
		})
	}
	addMedicalRecords(){
		 var obj1={
			patientId:this.state.patientId, 
			doctorId :this.state.doctorId,
			description:this.state.description,
			image: this.state.image
		}
		$.ajax({
			url:'/api/medical',
			type:"POST",
			data:obj1,
			success:(data)=>{
				console.log(data)
			},
			error:(err)=>{
				console.log(err)
			}
		});
	}

	render(){
	return(
		<div>
		<h2>patientId:<input placeholder="patientId" name="patientId" onChange={this.handleChange}/></h2>
		<h2>doctorId:<input placeholder="doctorId" name="doctorId" onChange={this.handleChange}/></h2>
		<h2>description:<input placeholder="description" name="description" onChange={this.handleChange}/></h2>
		<h2>image:<input placeholder="image" name="image" onChange={this.handleChange}/></h2>
		<div>
			<button onClick={this.addMedicalRecords}>addMedicalRecords</button>
		</div>
		</div>

		);
	}
}




export default MedicalRecords;