import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles, MenuItem, TextField, Step, InputLabel, Stepper,
		FormControl, StepLabel, StepContent, Paper,
		Button, Select, Typography } from 'material-ui';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});


class Pationt extends React.Component{
	constructor(props){

		super(props);
		this.state={
    	hour:"",
    	activeStep:0,
    	appData:[],
    	todayDate:[],
    	doctors:[],
    	today: '',
		dataToMain:' ',
		doc:'',
		move:false,
		user:[],
		oneDocApp:[],
		doctorName:''
		}

		this.handleNext=this.handleNext.bind(this);
		this.getSteps=this.getSteps.bind(this);
		this.getStepContent=this.getStepContent.bind(this);
		this.handleBack=this.handleBack.bind(this);
		this.handleReset=this.handleReset.bind(this);
		this.handleChange=this.handleChange.bind(this)
		this.ChooseDate = this.ChooseDate.bind(this)
		this.handleDate = this.handleDate.bind(this)
		this.formatDate = this.formatDate.bind(this)
		this.ChooseTime=this.ChooseTime.bind(this)
		this.handleTime=this.handleTime.bind(this)
		this.handleDoctor=this.handleDoctor.bind(this)
		this.handleComplete=this.handleComplete.bind(this)
		this.getUserData = this.getUserData.bind(this);
		this.final=this.final.bind(this)
	}
componentDidMount(){
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
		var today=this.formatDate(new Date);
		this.setState({
			today:today
		})
		this.getUserData();
	}

	getUserData() {
	    var that = this
	    $.ajax({
	      url:'/api/userController/getLogin',
	      type:'GET',
	      success:function(data){
	        that.setState({
	          user: data
	        })
	      },
	      error:function(err){
	        console.log(err);
	      }
	    });
	}

	ChooseTime(){
		const classes=this.props
		return(
			<TextField
        type="time"
        value={this.state.hour}
        onChange={this.handleTime}
        format={"HH:mm"}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 1800, // 30 min
        }}
      />
			)	
	}

	handleTime(e){
		var time=e.target.value;

		console.log(time);
		console.log(e.target.value);
		console.log('type',typeof(e.target.value))
		var aHour='';
		var date='';
		var counter=true;
		var startWork=this.state.appData[0].doctorId.hoursOfWork;
		var startWork=startWork+8+'';
		startWork=startWork+':00'
		console.log('startWork ',startWork)
		console.log('time ',time)
		console.log()
		if(time>startWork){
			counter=false;
		}
		console.log('counter ',counter)
		for(var i=0;i<this.state.appData.length;i++){
			aHour=this.state.appData[i].hour;
			date=this.state.appData[i].date;
			if(time===aHour&&this.state.dataToMain===date){
				console.log("please select avaliable time")
				counter=false;
			}
		}

		if(counter===true){
			console.log('yessss')
			this.setState({
				hour: e.target.value,
			})			
		}else{
			alert('choose avaliable time')
		}

	}

	getSteps(){
		return ['Choose Doctor','Choose Date','Choose Time','final step'];
	}

	handleChange(e){
		this.setState({
			age:e.target.value
		})
	}

	getStepContent(step){
		switch(step){
			case 0:
			return this.ChooseDoctor()
			case 1:
			return this.ChooseDate()
			case 2:
			return this.ChooseTime()
			case 3:
			return this.final();

		}
	}

	final(){
		return(
			<div>
			<p>
			You pick an appoinment with Doctor <b> {this.state.doctorName} 
			</b>
			<br /> 
			on <b>{this.state.dataToMain}</b> at <b>{this.state.hour}</b>
			</p>
			</div>
			)
	}

	ChooseDoctor(){
		const classes =this.props;
		return(
			<div>
			<select name="Doctor" onChange={this.handleDoctor}>
			<option value=''>chose a doctor</option>
			{this.state.doctors.map(function(item){
				return(
				<option value={item._id}>{item.fullName}</option>
					)
			})}
			</select>
			</div>
			)
	}

	handleDoctor(e){
		var that=this;
		this.setState({
			doc:e.target.value,
			move:!this.state.move
		})
		var that=this;
		var appArr=[];
		$.ajax({
			type:'get',
			url:'/app',
			success:function(appdata){
				for(var i=0;i<appdata.length;i++){
					appArr.push(appdata[i]);
				}
				that.setState({
					appData:appdata,
				})
			}
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

	handleDate(e){
	var appdata=[];
	var doctorName;
	var appstate=this.state.appData;
	for(var i=0;i<appstate.length;i++){
		if(appstate[i].doctorId._id===this.state.doc){
			appdata.push(appstate[i]);
			doctorName=appstate[i].doctorId.fullName
		}
	}
	
	this.setState({
		appData:appdata,
		doctorName:doctorName
	})
	var test=this.formatDate(date.value)
	this.setState({
		dataToMain: e.target.value,
	})
	}
		
	ChooseDate() {
		const classes=this.props
		return (
			
			<div>

			 <TextField
			  id="date"
		      label='chose the date'
		      type='date'
		      className={classes.textField}
		      dateFormat="LLL"
		      value={this.state.dataToMain}
		      name="dateC"
		      onChange={this.handleDate}
		      inputLabelProps={{
		      	shrink:true
		      }}
		      />
      </div>
			
		)
	}
	handleNext(){
			console.log('stats ',this.state)

		if(this.state.activeStep===0){
			if(this.state.doc){
				this.setState({
			activeStep:this.state.activeStep +1
		})
			}else{
				alert('please select doctor')
			}
		}
		if(this.state.activeStep===1){
			if(this.state.today<=this.state.dataToMain){
				this.setState({
			activeStep:this.state.activeStep +1
				})
			}else{
				alert('please select date')
			}
		}
		if(this.state.activeStep===2){
			if(this.state.hour){
				this.setState({
			activeStep:this.state.activeStep +1
				})
			}else{
				alert('please select time')
			}
		}
		if(this.state.activeStep===3){
			this.setState({
				activeStep:this.state.activeStep +1
			})
			this.handleComplete();
		}

		// this.setState({
		// 	activeStep:this.state.activeStep +1
		// })
	}

	handleBack(){
		this.setState({
			activeStep:this.state.activeStep -1
		})
	}

	handleReset(){
		this.setState({
			activeStep:0
		})
	}



	// chooseDateData(data){

	// 	var year=data.dataToMain.slice(0,4);
	// 	var month=data.dataToMain.slice(5,7);
	// 	var day=data.dataToMain.slice(8,10);
	// 	year =parseInt(year)
	// 	month =parseInt(month)
	// 	day =parseInt(day)

	// 	var tYear=data.today.slice(0,4);
	// 	var tMonth=data.today.slice(5,7);
	// 	var tDay=data.today.slice(8,10);
	// 	tYear =parseInt(tYear)
	// 	tMonth =parseInt(tMonth)
	// 	tDay =parseInt(tDay)
	// 	this.setState({ 
	// 		appDate:[year,month,day],
	// 		todayDate:[tYear,tMonth,tDay]
	// 	});

	// }

	

	handleComplete(){
		var obj={
			date:this.state.dataToMain,
			hour:this.state.hour,
			doctorId:this.state.doc,
			userId:this.state.user._id
		}
		$.ajax({
			url:'/app',
			type:'post',
			data:obj,
			success:function(data){
			}
		})

		this.setState({
		hour:"",
    	activeStep:0,
    	appData:[],
    	todayDate:[],
    	doctors:[],
    	today: '',
		dataToMain:' ',
		doc:'',
		move:false,
		user:[],
		oneDocApp:[],
		doctorName:''
		})
		this.componentDidMount()

	}

	render(){
		var that=this;
		const classes = this.props;
		const steps=this.getSteps();
		const activeStep =this.state.activeStep;
		return (
	<div>
		<div className={classes.root}>
		<Stepper activeStep={activeStep} orientation="vertical">
			{steps.map(function(label,index){
				return(
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
						<Typography>{that.getStepContent(index)}</Typography>
						<div className={classes.actionsContainer}>
						<div>
						<Button
							disabled={activeStep===0}
							onClick={that.handleBack}
							className={classes.button}
						>
						BACK
						</Button>
						<Button
						variant="raised"
						color="primary"
						onClick={that.handleNext}
						className={classes.button}
						>
						{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
						</Button>

						</div>
						</div>
						</StepContent>
						</Step>
					);
			})}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} className={classes.resetContainer}>
					<Typography>All steps completed</Typography>
					<Button onClick={this.handleReset} className={classes.button}>
					reset
					</Button>
					</Paper>
				)}
      	</div>

     <div>
						</div>

 
      	</div>
			)
	}


}

Pationt.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Pationt);