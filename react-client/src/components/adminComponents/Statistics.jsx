import React from 'react';
import $ from 'jquery';

class Statistics extends React.Component {
	constructor(props){
		super(props);
		this.state={
			doctors:[],
			labTechs:[],
			userData:[],
			depts:[]

		}
	}
	componentDidMount() {
    	var that=this;
    	$.ajax({
	    	type:'GET',
			dataType: "json",
	 		url: '/Doctor/retrieve',
	 		success:function(data){
	 			that.setState({
	 				doctors:data
	 			})
	 		}
		})
		var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/labTech',
 		success:function(data){
 			that.setState({
 				labTechs:data
 			})
 		}
		})
		var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/api/userController/retrive/allPatient',
 		success:function(data){
 			that.setState({
 				userData:data
 			});
 		}
		})
		var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/dept',
 		success:function(data){
 			that.setState({
 				depts:data
 			});
 		}
		});

    }

	render() {
		return (
			<div>
			<h1>Doctor num :{this.state.doctors.length}</h1>
			<h1>labTechs num :{this.state.labTechs.length}</h1>
			<h1>userData num :{this.state.userData.length}</h1>
			<h1>depts num :{this.state.depts.length}</h1>
			</div>
		);
	}
}

export default Statistics;