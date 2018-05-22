import React from 'react';
import $ from 'jquery';
import {  TextField, Grid,
		Button, CardActions } from 'material-ui'
class UpdateLabTechncians extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userName:'',
	        password:'',
		}
		this.updateLabTechnciansClick = this.updateLabTechnciansClick.bind(this);
		this.onChange =this.onChange.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	componentDidMount() {
		var that =this;
		$.ajax({
			url:'/labTech/getOne/tech',
			type:'GET',
			success:function(data){

				console.log(data)	
				that.setState({
					userName: data.userName
				})
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	updateLabTechnciansClick(){
		var that =this;
		$.ajax({
			url:'/labTech/update',
			type:'PUT',
			data:that.state,
			success:function(data){
				alert('Updated');
			},
			error:function(err){
				console.log(err);
			}
		})
	}
	render(){
	return(
		<div>
			<div className="card">
			<div className='container-fluid'>
			<Grid item xs={6} sm={3}>
				<TextField
		          required
		          id="userName"
		          placeholder="UserName"
		          width="200"
		          margin="normal"
		          name='userName'
		          value={this.state.userName}
	      		  onChange={this.onChange}
	      		  disabled
		        />
			</Grid>
			<Grid item xs={6} sm={3}>
				<TextField
		          required
		          id="password"
		          type="password"
		          label="Password"
		          placeholder="Password"
		          width="200"
		          margin="normal"
		          name='password'
	      		  onChange={this.onChange}
		        />
			</Grid>
			<CardActions>
				<Button variant="raised" color="primary" onClick={this.updateLabTechnciansClick} >
		        	Update Lab Techncians
		      	</Button>
			</CardActions>
			</div>
			</div>
			<br/>	
		</div>
				)
		}
	}

export default UpdateLabTechncians;