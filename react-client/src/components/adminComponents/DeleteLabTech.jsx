import React, { Component } from 'react';
import $ from "jquery";

 class DeleteLabTech extends Component {
 	constructor(props){
 		super(props);
 		this.state={
 			username:""
 		}
 		this.onChange=this.onChange.bind(this)
 	}
 	onChange(e){
 		this.setState({
 			[e.target.name]:e.target.value;
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
			<div></div>
		);
	}
}



export default DeleteLabTech;