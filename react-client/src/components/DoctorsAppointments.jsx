import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  		snackbar: {
    	margin: theme.spacing.unit,
  		},
  		root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
	});
class DoctorApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[],			//all doctors
			app:[],				// store all appoinment
			doc:'',            //store the doctor id
			show:false,			//show or hide the app to screen
			today:'',          // today date
			todayApp:[],       // store the appoinment of this day
			
		}
		this.sort=this.sort.bind(this);
		this.handleDoctor=this.handleDoctor.bind(this);
		this.formatDate=this.formatDate.bind(this);
	}
	
	componentDidMount(){
		var that=this;
		var doctorIdArr=[];
		$.ajax({
			type:'get',
			url:'/Doctor/retrieve',
			success:function(data){
				for(var i=0;i<data.length;i++){
					doctorIdArr.push(data[i])
				}
				that.setState({		
				doctors:doctorIdArr
			})
			}
		})
		var appArr=[];		
		$.ajax({
			type:'get',
			url:'/app',
			success:function(data1){
				for(var j=0;j<data1.length;j++){
					appArr.push(data1[j])
				}
				that.setState({		
				app:appArr
			})
			}
		})
		var today=this.formatDate(new Date);
		this.setState({
			today:today
		})



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

	handleDoctor(e){
		this.setState({
			doc:e.target.value
		})
	}

	sort(){
		var thisDay=this.state.today;


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
		}
		var todayApp=[];
		for(var i=0;i<app.length;i++){
			if(thisDay==app[i].date){
				todayApp.push(app[i])
			}
		}


		var s =this.state.show;
		this.setState({
			app:docApp,
			show:!s,
			todayApp:todayApp
		})

	}

	render(){
		const classes=this.props
		var that=this
		return(
			<div>

			<Button onClick={that.sort}>SHOW</Button>
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
					<Paper className={classes.root}>
					      <Table className={classes.table}>
					        <TableHead>
					          <TableRow>
					            <TableCell>pationt name</TableCell>
					            <TableCell>date</TableCell>
					            <TableCell>hour</TableCell>
					          </TableRow>
					        </TableHead>
					        <TableBody>
					          {this.state.app.map(function(item){
					            return (
					              <TableRow>
					                <TableCell>{item.userId.FullName
}</TableCell>
					                <TableCell>{item.date}</TableCell>
					                <TableCell>{item.hour}</TableCell>
					              </TableRow>
					            );
					          })}
					        </TableBody>
					      </Table>
					    </Paper>					
					)}
			</div>
			)
	}
}

export default DoctorApp;


// <div>
// 					 {this.state.app.map(function(item){
// 					return(
// 						<h1>{item.date}</h1>
// 						)
// 				})}

// 					</div>