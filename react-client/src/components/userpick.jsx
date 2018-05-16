import React from 'react';
import $ from 'jquery';

class Appoinment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[],
			u:[],
			doct:[],
			from:'',
			to:'',
			day:''
		}
		this.handleChange=this.handleChange.bind(this);
		this.send=this.send.bind(this);
		this.textHandleChange=this.textHandleChange.bind(this)
	}

	componentDidMount(){
		var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/doctor/retrieve',
 		success:function(data){
 			that.setState({
 				doctors:data
 			})
 		}
		});
	}

	handleChange(e){
		this.setState({
			u:e.target.value
		});
		var that=this;
		var y;
		var x=[];
		$.ajax({
			type:'get',
			url:'Doctor/retrieve',
			dataType: "json",
			success:function(data){
				console.log(data)
				for(var i=0;i<data.length;i++){
					if(data[i]._id===that.state.u){
					y=data[i].hoursOfWork;
					console.log(y)
					}	
				}
				for(var i=y;i<y+8;i++){
					x.push(i);
				}
				that.setState({
					doct:x
				})
			}
		})
	}

	textHandleChange(e){
		this.setState({
			[e.target.name]:e.target.value
		});
	}

	send(){
		
		var	obj={
				day:this.state.day,
				from:this.state.from,
				to:this.state.to,
				doctorId:'5afaf38261bfa40dae63743e',
				userId:'5afaf38261bfa40dae637442'
			}
		$.ajax({
			type:'POST',
			url:'/app',
			data:obj,
			success:function(data){
				console.log('data ',data)
			},
			error:function(err){
				console.log('error ',err)
			}

		})
	}

	render(){
		return(
			<div>
			<h1>pick</h1>
				<select name='selector' onChange={this.handleChange}>
					{this.state.doctors.map(function(item){
						return (
								<option value={item._id}>{item.fullName}</option>
							)
					})}
				</select>
				<input type='text' name='from' value={this.state.from} placeholder='from' onChange={this.textHandleChange}/>
				<input type='text' name='to' value={this.state.to} placeholder='to' onChange={this.textHandleChange}/>
				<input type='text' name='day' value={this.state.day} placeholder='day' onChange={this.textHandleChange}/>
				<button onClick={this.send}>save</button>


				<h1>{this.state.u}</h1>
			</div>
			)
	}

}

export default Appoinment;

				// <form>
				// {this.state.doct.map(function(item){
				// 	var that=this;
				// 	return(
				// 		<h4>
				// 		<input type="radio" name="s" value={item} />
				// 		{item}
				// 		</h4>
				// 		)
				// })}
				// <button name='send' onClick={this.handleOptionChange} >send</button>
				// </form>