import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { withStyles, Button, Paper, Table, SnackbarContent,
		 TableBody, TableCell, TableHead, TableRow } from 'material-ui';
import Try from './try.jsx'
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
    }
	});
class DoctorApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			app:[],				// store all appoinment
			doc:'',            //store the doctor id
			show:false,			//show or hide the app to screen
			today:'',          // today date
			todayApp:[],       // store the appoinment of this day
			doctor:[],
			unReadMsg:0
			
		}
		this.sort=this.sort.bind(this);
		this.formatDate=this.formatDate.bind(this);
		this.getDoctorData=this.getDoctorData.bind(this);
	}
	
	componentDidMount(){
		var that=this;
		var c=0;
		this.getDoctorData();
		var appArr=[];		
		$.ajax({
			type:'get',
			url:'/app',
			success:function(data1){
				console.log('data1 from doctor com ',data1[0].doctorId._id)
				console.log('state from doctor com ',that.state.doctor._id)

				for(var j=0;j<data1.length;j++){
					appArr.push(data1[j])
					if(data1[j].doctorId._id===that.state.doctor._id&&data1[j].read===false){
						c++
					}
				}
				that.setState({		
				app:appArr,
				unReadMsg:c
			})
				console.log('c==',c)


			}
		})
		var today=this.formatDate(new Date);
		this.setState({
			today:today
		})
	}

	getDoctorData() {
	    var that = this
	    $.ajax({
	      url:'/Doctor/getOne',
	      type:'GET',
	      success:function(doct){
	        that.setState({
	          doctor: doct
	        })
	      },
	      error:function(err){
	        console.log(err);
	      }
	    });
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
			if(app[i].doctorId._id==this.state.doctor._id){
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
		console.log(this.state)
		const classes=this.props
		var that=this
		return(
			<div>

			<Button onClick={that.sort}>SHOW</Button>
			<Try msg={this.state.unReadMsg}/>
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
					                <TableCell>{item.userId.FullName}</TableCell>
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

