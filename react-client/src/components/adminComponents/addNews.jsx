import React from 'react';
import $ from 'jquery';
// import { withStyles, MenuItem, TextField, Input, InputLabel, InputAdornment,
// 		FormControl, Paper, Grid, CardHeader, FormHelperText,
// 		Button, Select, Card, CardActions, CardContent } from 'material-ui';

// const styles=theme =>({

// })

export class addNews extends Component {
	constructor(props){
		super(props);
		this.state={
			newsSubject:"",
			newsText:"",
			Image:"",
			
		}
		this.addNewsClick=this.addNewsClick.bind(this);

	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		});

	}

addNewsClick(){
	var that=this;
	
	$.ajax({
		type:"POST",
		url:'/news',
	    data:that.state,
	    success:function(data){
	    	alert("data added")
	    },
	    error:function(err){
	    	console.log(err)
	    }


	})
}


	render() {
		return (
			<div>
				<h1>newsSubject: <input placeholder="enter the subject" name="newsSubject" onChange={this.onChange}/></h1>
				<h1>newsText: <input placeholder="enter the news" name="newsText" onChange={this.onChange}/></h1>
				<h1>Image: <input placeholder="enter the Image" name="Image" onChange={this.onChange}/></h1>
				<div><button onClick ={this.addNewsClick} > Add </button></div>
			</div>
		);
	}
}
