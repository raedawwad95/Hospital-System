import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
  		snackbar: {
    	margin: theme.spacing.unit,
  		},
	});
class DoctorApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[],
			app:[],
			doc:'',
			app1:[],
			show:false
			
		}
		this.sort=this.sort.bind(this);
		this.handleDoctor=this.handleDoctor.bind(this);
	}
	
	componentDidMount(){
		var that=this;
		var doctorIdArr=[];
		$.ajax({
			type:'get',
			url:'/Doctor/retrieve',
			success:function(data){
				console.log(data)
				for(var i=0;i<data.length;i++){
					doctorIdArr.push(data[i])
				}
				that.setState({		
				doctors:doctorIdArr
			})
			}
		})
		console.log('that state',this.state)
		var appArr=[];		
		$.ajax({
			type:'get',
			url:'/app',
			success:function(data1){
				console.log(data1)
				for(var j=0;j<data1.length;j++){
					appArr.push(data1[j])
				}
				that.setState({		
				app:appArr
			})
			}
		})
	}

	handleDoctor(e){
		this.setState({
			doc:e.target.value
		})
	}

	sort(){
		var that=this;
		var app=this.state.app;
		var docApp=[];
		var min=app[0];
		var j=0;
		while(app[j]){
			for(var i=0;i<app.length;i++){
				if(app[j].date<app[i].date){
					min=app[j];
					app[j]=app[i];
					app[i]=min;
				}
			}
			j++
		}
		for(var i=0;i<app.length;i++){
			if(app[i].doctorId._id==this.state.doc){
				docApp.push(app[i])
			}
			console.log('fffff ',docApp)
		}
		var s =this.state.show;
		this.setState({
			app:docApp,
			show:!s
		})
	}

	render(){
		const classes=this.props
		var that=this
		return(
			<div>

			<Button onClick={that.sort}>sort</Button>
			<select name="doctor" onChange={this.handleDoctor}>
			<option value="">choose doctor</option>
				{this.state.doctors.map(function(item){
					return(
						<option value={item._id} >{item.fullName}</option>
						)
				})}

				</select>
				----------------------------------------------
				{this.state.show&&(
					<div>
					 {this.state.app.map(function(item){
					return(
						<h1>{item.date}</h1>
						)
				})}

					</div>
					)}
			</div>
			)
	}
}

export default DoctorApp;


// {this.state.app.map(function(item){
// 					return(
// 						<h1>{item._id}</h1>
// 						)
// 				})}