import React from 'react';
import $ from 'jquery';
class LoginLabTech extends React.Component{
constructor(props){
	super(props);
	this.state={
		userName:'',
		password:''
	}
	this.loginLabTech=this.loginLabTech.bind(this);
	this.onChange=this.onChange.bind(this);
}
onChange(e){
	this.setState({
		[e.target.name]:e.target.value
	})
}
loginLabTech(){
	var that =this;
	$.ajax({
		url:'/labTech/login',
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
		<div><button onClick ={this.loginLabTech} > Login </button></div>	
	</div>
 )
}
}

export default LoginLabTech;