import React from 'react';
import $ from 'jquery';

class AddLabTechncians extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			fullName:'',
			id:'',
			imageOfId:'',
			workHour:'',
			personalImgUrl:'',
			gender:''
		}
		this.onChange =this.onChange.bind(this);
		this.AddLabTechnciansClick=this.AddLabTechnciansClick.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
			
		});

	}
	AddLabTechnciansClick(){
		console.log(this.state)
		var that =this;
		$.ajax({
			type:'POST',
			url:'/labTech',
			data:that.state,
			success:function(data){
				console.log(data)
			},
			error:function(err){
				console.log(err)
				}

		})
	}

	render(){
		return(
			<div>
			    <h2>UserName : <input placeholder="username" name="username" onChange={this.onChange}/></h2>
				<br/><br/>
				<h2>password: <input placeholder="password" name="password" onChange={this.onChange}/></h2>	
				<br/><br/>
				<h2>fullName: <input placeholder="fullName" name="fullName" onChange={this.onChange}/></h2>
				<br/><br/>
				<h2>id: <input placeholder="id" name="id" onChange={this.onChange}/></h2>
				<br/><br/>
				<h2>imageOfId: <input placeholder="imageOfId" name="imageOfId" onChange={this.onChange}/></h2>
				<br/><br/>
				<h2>personalImgUrl: <input placeholder="personalImgUrl" name="personalImgUrl" onChange={this.onChange}/></h2>
				<br/><br/>
				<h2>workHour: <input placeholder="workHour" name="workHour" onChange={this.onChange}/></h2>
				<br/><br/>
				<input type="radio" value="MALE" name="gender" onChange={this.onChange}/> Male
                <input type="radio" value="FEMALE" name="gender" onChange={this.onChange}/> Female
				<br/><br/>
				<div><button onClick ={this.AddLabTechnciansClick} > AddLabTechncians </button></div>	
			</div>
			)
	}
}

export default AddLabTechncians;
