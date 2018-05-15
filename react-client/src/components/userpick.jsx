import React from 'react';
import $ from 'jquery';

class Appoinment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[],
			u:[],
			doct:[]
		}
		this.handleChange=this.handleChange.bind(this)
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
				<form>
				{this.state.doct.map(function(item){
					return(
						<h4>
						<input type="radio" name="s" value={item} />
						{item}
						</h4>
						)
				})}
				</form>
				<h1>{this.state.u}</h1>
			</div>
			)
	}



}

export default Appoinment;