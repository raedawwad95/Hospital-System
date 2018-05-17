import React from 'react';

class Calender extends React.Component{
	constructor(props){
		super(props)
		this.state={
			years:[2018,2019,2020,2021,2022,2023,2024,2025],
			monthes:["January","February","March","April","May","June","July","August","September","October","November","December"],
			month:'',
			day:'',
			d:''
		}
		this.bringDates=this.bringDates.bind(this);
		this.handleTextChange=this.handleTextChange.bind(this)
	}

	handleChange(){
		this.setState({
			month:e.target.value
		})


	}

	handleTextChange(e){
		this.setState({
			day:e.target.value
		})
	}

	bringDates(){
		var day=this.state.day;
		var month=this.state.month;
		
	}

	render(){
		var i=0;
		return (
			<div>
			<select name='month' onChange={this.handleChange}>
				{this.state.monthes.map(function(item){
					i++
					return(
					<option value={i}>{item}</option>
						)
				})}
			</select>
			<input type='text' value={this.state.day} onChange={this.handleTextChange} placeholder='day' width='10'/>
			<button onClick={this.bringDates}> show </button>
			</div>
			)	
	}


}

export default Calender;



// <select name='day' onChange={this.handleChange}>
// 				{this.state.days.map(function(item){
// 					i++
// 					return(
// 					<option value={item}>{item}</option>
// 						)
// 				})}
// 			</select>