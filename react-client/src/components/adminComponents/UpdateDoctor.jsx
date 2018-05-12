import React from 'react';
import $ from 'jquery';

class UpdateDoctor extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userName:'',
			password:'',
			imageOfDoctor:''
		}
		this.updateDoctor=this.updateDoctor.bind(this);
		this.onChange=this.onChange.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	updateDoctor(){
		var that =this;
		$.ajax({
			url:'/Doctor/update',
			type:'PUT',
			data:that.state,
			success:function(data){
				console.log(data);
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	render(){
		return (

			<div>
				<h1>UserName :<input placeholder='userName' name="userName" onChange={this.onChange} /></h1>
				<br/><br/>
				<h1>password :<input placeholder='password' name="password" onChange={this.onChange} /></h1>
				<br/><br/>
				<h1>imageOfDoctor :<input placeholder='imageOfDoctor' name="imageOfDoctor" onChange={this.onChange} /></h1>
				<br/><br/>
				<div><button onClick ={this.updateDoctor} > updateDoctor </button></div>	

			</div>

			)
	}
}

export default UpdateDoctor;