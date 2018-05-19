import React from 'react';
import $ from 'jquery'

class UserAppoinment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			show:false,
			doctors:[],
			doctorsId:[],
			doctorsHour:[],
			doctor:'',
			doctorHour:0,
			months:["January","February","March","April","May","June","July","August","September","October","November","December"],
			month:0,
			days:[],
			day:0,
			hours:[],
			hour:0
		}
		this.doctorhandleChange=this.doctorhandleChange.bind(this)
		this.show=this.show.bind(this);
		this.monthHandelChange=this.monthHandelChange.bind(this);
		this.daysHandleChange=this.daysHandleChange.bind(this);
		this.send=this.send.bind(this);
	}

	componentDidMount(){
		var that=this;
		var arr=[];
		var arr1=[];
		$.ajax({
			type:'get',
			url:'/Doctor/retrieve',
			success:function(data){
				for(var i=0;i<data.length;i++){
					arr.push(data[i]._id);
					arr1.push(data[i].hoursOfWork);
				}
				that.setState({
					doctors:data,
					doctorsId:arr,
					doctorsHour:arr1
				})
			}
		})	
	}

	show(){
		this.setState({
			show:!this.state.show
		})

	}

	doctorhandleChange(e){
		var arr2=[];
		var x=this.state.doctorsId.indexOf(e.target.value);
		var xx=this.state.doctorsHour[x]
		console.log('this.state.doctorsHour[x]',xx)
		for(var i=xx;i<xx+8;i++){
		
			arr2.push(i)
		}
		this.setState({
			doctor:e.target.value,
			doctorHour:this.state.doctorsHour[x],
			hours:arr2
		})

	}

	daysHandleChange(e){
		this.setState({
			day:e.target.value
		})
	}

	monthHandelChange(e){
		this.setState({
			month:e.target.value
		})
		if(['1','3','5','7','8','10','12'].includes(e.target.value)){
			var arr=[];
			for (var i=1;i<=31;i++){
					arr.push(i)
				}
			this.setState({

				days:arr
		})
		}else if(['4','6','9','11'].includes(e.target.value)){
			var arr=[];
			for (var i=1;i<=30;i++){
					arr.push(i)
				}
			this.setState({
				days:arr
		})
		}else if(e.target.value==='2'){
					var arr=[];
			for (var i=1;i<=28;i++){
					arr.push(i)
				}
					this.setState({
				days:arr
		})
		}
	}

	send(){
		var	obj={
				month:this.state.month,
				day:this.state.day,
				hour:this.state.hour ,
				doctorId:this.state.doctor,
				userId:'5afda34d8cd8f1090c6c4e16'
			}

			$.ajax({
				type:'post',
				url:'/app',
				data:obj,
				success:function(data){
					alert('data saved')
				},
				error:function(err){
					console.log(err)
				}
			})

	}

	render(){
		console.log('doctors ',this.state.doctors)
		console.log('doctorsId ',this.state.doctorsId)
		console.log('doctorsHour ',this.state.doctorsHour)
		console.log('doctor ',this.state.doctor)
		console.log('doctorHour ',this.state.doctorHour)
		console.log('month ',this.state.month)
		console.log('days ',this.state.days)
		console.log('day ',this.state.day)
		console.log('hour ',this.state.hour)


		var i=0;

		return (
			<div>
			<h1>monther</h1>
			<button onClick={this.show}>show</button>			
				{this.state.show&&(
					<div>
					<select name='doctors' onChange={this.doctorhandleChange}>
					<option value=''>chose doctor</option>
					{this.state.doctors.map(function(doctor){
						return (
				  			<option value={doctor._id}>{doctor.fullName}</option>
							)
					})}
			   </select>
			   <select name='month' onChange={this.monthHandelChange}>
					<option value=''>chose month</option>
			   {this.state.months.map(function(month){
			   		i++;
			   		return(
					<option value={i}>{month}</option>
			   			)
			   })}
			   </select>
			
			   	<select name='days' onChange={this.daysHandleChange}>
			   	<option value=''>chose day</option>
			   	{this.state.days.map(function(day){
			   		return (
			   		<option value={day}>{day}</option>

			   			)
			   	})}
			   	</select>
				<select name='hour' onChange={this.hourHandleChange}>
				<option value=''>select hour</option>
				{this.state.hours.map(function(hour){
					return(
					<option value={hour}>{hour}:00</option>

						)
				})}

				</select>
				<button onClick={this.send}>pick</button>
			   </div>
					)}

			</div>
			)
	}


} 


export default UserAppoinment