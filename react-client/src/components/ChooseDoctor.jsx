import React from 'react';
import $ from 'jquery';
// import PropTypes from 'prop-types';
// import keycode from 'keycode';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import MenuItem from '@material-ui/core/MenuItem';
// import Chip from '@material-ui/core/Chip';


// var doctorsname =[];

class ChooseDoctor extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[]
		}
	}

	// for(var i=0;i<this.state.doctors.length;i++){
	// 	doctorsname.push()

	// }


	componentDidMount(){
		console.log('ChooseDoctor')
		var arr=[];
		var that=this;
		$.ajax({
			type:'get',
			url:'/Doctor/retrieve',
			success:function(data){
				for(var i=0;i<data.length;i++){
					arr.push(data[i])
				}
				that.setState({
					doctors:arr
				})
			}
		})
		console.log(this.state)
	}

	
	render(){
		console.log(this.state)
		return(
			<div>
				
			</div>
			)	
	}
}

export default ChooseDoctor;

// <TextField
// 				    InputProps={{
// 				    inputRef: ref,
// 				    classes: {
// 				        root: classes.inputRoot,
// 				    },
// 				        ...InputProps,
// 				      }}
// 				      {...other}
// 				    />