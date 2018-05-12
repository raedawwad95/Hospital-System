import React from 'react';
import $ from 'jquery';

class LoginDoctor extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userName:'',
			password:''
		}
		this.loginDoctor=this.loginDoctor.bind(this);
		this.onChange=this.onChange.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	loginDoctor(){
		var that =this;
		$.ajax({
			url:'/Doctor/login',
			type:'POST',
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
				<div><button onClick ={this.loginDoctor} > Login </button></div>	

			</div>

			)
	}
}

export default LoginDoctor;