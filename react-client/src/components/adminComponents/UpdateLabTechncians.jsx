import React from 'react';
import $ from 'jquery';

class UpdateLabTechncians extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userName:'',
	        password:'',
	        fullName:'',
	        personalImgUrl:''
		}
		this.updateLabTechnciansClick = this.updateLabTechnciansClick.bind(this);
		this.onChange =this.onChange.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	updateLabTechnciansClick(){
		var that =this;
		$.ajax({
			url:'/labTech/update',
			type:'PUT',
			data:that.state,
			success:function(data){
				console.log(data);
			},
			error:function(err){
				console.log(err);
			}
		})
	}
	render(){
		return(
			<div>
				<h1>UserName :<input placeholder='userName' name="userName" onChange={this.onChange} /></h1>
				<br/><br/>
				<h1>password :<input placeholder='password' name="password" onChange={this.onChange} /></h1>
				<br/><br/>
				<h1>fullName :<input placeholder='fullName' name="fullName" onChange={this.onChange} /></h1>
				<br/><br/>
				<h1>personalImgUrl :<input placeholder='personalImgUrl' name="personalImgUrl" onChange={this.onChange} /></h1>
				<br/><br/>
				<div><button onClick ={this.updateLabTechnciansClick} > UpdateLabTechncians</button></div>	
			</div>
			)
	}
}

export default UpdateLabTechncians;