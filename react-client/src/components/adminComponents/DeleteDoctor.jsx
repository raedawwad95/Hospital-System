import React, { Component } from 'react';
import $ from "jquery";

 class DeleteDoctor extends Component {
	constructor(props){
		super(props);
		this.state={
			userName:""

		}
		this.DeleteDoctorClick=this.DeleteDoctorClick.bind(this);
		this.onChange =this.onChange.bind(this)
	}

	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}


	DeleteDoctorClick(){
		var that=this;
		
		$.ajax({
			type:'DELETE',
			url:'Doctor/'+that.state.userName,
			success:function(data){
				console.log(data)


			},
			error:function(err){
				console.log(err)
			}

		})

	}

	render() {
		return (
			<div>
				<h1>userName :<input placeholder='userName' name="userName" onChange={this.onChange} /></h1>
				<br/><br/>
				<div><button onClick ={this.DeleteDoctorClick} > DELETE </button></div>	

			</div>
		);
	}
}
export default DeleteDoctor;
