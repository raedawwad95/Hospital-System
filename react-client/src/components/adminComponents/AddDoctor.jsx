import React from 'react';
import $ from 'jquery';

class AddDoctor extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			fullName:'',
			imageOfDoctor:'',
			imageOfId:'',
			nationalId:'',
			hospitalId:'',
			department:'',
			spicilityStatus:'',
			hoursOfWork:'',
			gender:''
		
		}
		this.onChange =this.onChange.bind(this);
		this.AddDoctorClick=this.AddDoctorClick.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
			
		});

	}
	AddDoctorClick(){
		console.log(this.state)
		var that =this;
		$.ajax({
			type:'POST',
			url:'/Doctor/create',
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

				<h2>imageOfDoctor: <input placeholder="imageOfDoctor" name="imageOfDoctor" onChange={this.onChange}/></h2>
				<br/><br/>

				<h2>imageOfId: <input placeholder="imageOfId" name="imageOfId" onChange={this.onChange}/></h2>
				<br/><br/>
				<h2>nationalId : <input placeholder="nationalId" name="nationalId" onChange={this.onChange}/></h2>
				<br/><br/>
				<h2>hospitalId: <input placeholder="hospitalId" name="hospitalId" onChange={this.onChange}/></h2>
				
				<br/><br/>
				<h2>department: <input placeholder="department" name="department" onChange={this.onChange}/></h2>
				<br/><br/>

				<h2>spicilityStatus: <input placeholder="spicilityStatus" name="spicilityStatus" onChange={this.onChange}/></h2>
				<br/><br/>

				<h2>hoursOfWork: <input placeholder="hoursOfWork" name="hoursOfWork" onChange={this.onChange}/></h2>
				<br/><br/>
				<input type="radio" value="MALE" name="gender" onChange={this.onChange}/> Male
                <input type="radio" value="FEMALE" name="gender" onChange={this.onChange}/> Female
				<br/><br/>
				<div><button onClick ={this.AddDoctorClick} > AddDoctor </button></div>	
			</div>
			)
	}
}

export default AddDoctor;