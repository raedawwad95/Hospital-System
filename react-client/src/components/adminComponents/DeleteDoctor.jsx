import React, { Component } from 'react';
import $ from "jquery";
import { withStyles, MenuItem, Input, Select } from '@material-ui/core';
 class DeleteDoctor extends Component {
	constructor(props){
		super(props);
		this.state={
			userName:"",
			
			Doctor:[],
			depts:[],
			selected:""
		}
		this.DeleteDoctorClick=this.DeleteDoctorClick.bind(this);
		this.onChange =this.onChange.bind(this)
	}
	componentDidMount() {
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/dept',
 		success:function(data){
 			that.setState({
 				depts:data
 			})
 		}
		});
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
		var that=this;
    	var obj={
    		idOfDept:that.state.selected,
    		docName:that.state.userName
    	}
		$.ajax({
			type:"DELETE",
			url:'dept',
			data:obj,
			success:function(data){
				alert("success");
				
			}
			
		})

	}

	render() {
		return (
			<div>

				
				<h1>userName :<input placeholder='userName' name="userName" onChange={this.onChange} /></h1>
				<br/><br/>
				<div><button onClick ={this.DeleteDoctorClick} > DELETE </button></div>	
				
					<div>
						<select value={this.state.selected}
						            onChange={this.onChange}
						            input={<Input name="selected"/>}
									>{this.state.depts.map(function(element){
							return(


								<option value={element.idOfDept}>{element.nameOfDept}</option>
								)
						})}
						</select>
						

			</div>
			</div>
		);
	}
}
export default DeleteDoctor;
