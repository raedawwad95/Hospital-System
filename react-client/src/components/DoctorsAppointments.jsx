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
			todayYear:0,
			todayMonth:0,
			todayDay:0
		}
		this.formatDate=this.formatDate.bind(this)

	}

	formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
	}
	
	componentDidMount(){
		var today=this.formatDate(new Date);

		var year=today.slice(0,4);
		var month=today.slice(5,7);
		var day=today.slice(8,10);
		year =parseInt(year)
		month =parseInt(month)
		day =parseInt(day)
				this.setState({
			todayYear:year,
			todayMonth:month,
			todayDay:day
		})
		var that=this;
		var doctorIdArr=[];
		var appArr=[];
		$.ajax({
			type:'get',
			url:'/Doctor/retrieve',
			success:function(data){
				console.log('yes')
				for(var i=0;i<data.length;i++){
					doctorIdArr.push(data[i])
				}
				that.setState({		
				doctors:doctorIdArr
			})
			}
		})
				
		$.ajax({
			type:'get',
			url:'/app',
			success:function(data){
				console.log('data[i] ',data)
				for(var i=0;i<data.length;i++){
					console.log('that.state.year',that.state.year)
					console.log('data[i].year',data[i].year)
					if(that.state.todayYear<=data[i].year){
						if(that.state.todayMonth<=data[i].month){
							if(that.state.todayMonth===data[i].month){
								if(that.state.todayDay<=data[i].day){
									appArr.push(data[i])									
								}
							}else {
								appArr.push(data[i])
							}
						}
					}

				}
				that.setState({
				app:appArr
				})

			}
		})
	}


	render(){
		console.log('aaaaaaaaaa',this.state)
		const classes=this.props
		return(
			<div>
				{this.state.app.map(function(app){
					return(
   						<SnackbarContent className={classes.snackbar}
					 message={app.day}  />
						)
					
				})}



			</div>
			)
	}
}

export default DoctorApp;


	// {this.state.app.map(function(item){
	// 	return(
	// 		<h4>{item.day}</h4>
	// 		)
	// })}