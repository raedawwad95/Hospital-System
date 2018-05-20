import React, { Component } from 'react';
import $ from "jquery";

 class DeleteLabTech extends Component {
 	constructor(props){
 		super(props);
 		this.state={
 			username:""
 		}
 		this.onChange=this.onChange.bind(this);
 		this.DeleteLabTechClick=this.DeleteLabTechClick.bind(this);
 	}
 	onChange(e){
 		this.setState({
 			[e.target.name]:e.target.value
 		})
 	}

 	DeleteLabTechClick(){
 		var that=this;
 		$.ajax({
 			type:'DELETE',
 			url:'labTech/'+that.state.username,
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
				<h1>username:<input placeholder='username' name="username" onChange={this.onChange}/></h1>
				<br/><br/>
				<div><button onClick ={this.DeleteLabTechClick} > DELETE </button></div>	
			</div>
		);
	}
}



export default DeleteLabTech;