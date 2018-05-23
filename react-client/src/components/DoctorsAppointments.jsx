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
			doc:'5afdccc96586d3161e1299de',
			
		}
		this.sort=this.sort.bind(this)
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

	sort(){

		

	}

	render(){
		const classes=this.props
		var that=this
		return(
			<div>

			<Button onClick={that.sort}>sort</Button>
				{this.state.doctors.map(function(item){
					return(
						<h1>{item.fullName}</h1>
						)
				})}
				----------------------------------------------
				{this.state.app.map(function(item){
					return(
						<h1>{item._id}</h1>
						)
				})}
			</div>
			)
	}
}

export default DoctorApp;


