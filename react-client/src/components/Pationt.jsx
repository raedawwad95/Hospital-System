import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import ChooseDoctor from './ChooseDoctor.jsx';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';



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
		date: null,
    	hour:"",
    	activeStep:0,
    	appDate:[],
    	todayDate:[],
    	doctors:[],
    	age:5,
    	today: '',
		dataToMain:'',
		doc:'',
		move:false
		}

		this.handleNext=this.handleNext.bind(this);
		this.getSteps=this.getSteps.bind(this);
		this.getStepContent=this.getStepContent.bind(this);
		this.handleBack=this.handleBack.bind(this);
		this.handleReset=this.handleReset.bind(this);
		this.chooseDateData=this.chooseDateData.bind(this)
		this.handleChange=this.handleChange.bind(this)
		this.ChooseDate = this.ChooseDate.bind(this)
		this.handleDate = this.handleDate.bind(this)
		this.formatDate = this.formatDate.bind(this)
		this.ChooseTime=this.ChooseTime.bind(this)
		this.handleTime=this.handleTime.bind(this)
		this.handleDoctor=this.handleDoctor.bind(this)
		this.handleComplete=this.handleComplete.bind(this)
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
	this.setState({
		hour: e.target.value,
	})
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
			return 'sadas'

		}
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
		this.setState({
			doc:e.target.value,
			move:!this.state.move
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
	// var	date1= Date(date)
	// var	date2= Date.parse(date1)
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



	chooseDateData(data){

		var year=data.dataToMain.slice(0,4);
		var month=data.dataToMain.slice(5,7);
		var day=data.dataToMain.slice(8,10);
		year =parseInt(year)
		month =parseInt(month)
		day =parseInt(day)

		var tYear=data.today.slice(0,4);
		var tMonth=data.today.slice(5,7);
		var tDay=data.today.slice(8,10);
		tYear =parseInt(tYear)
		tMonth =parseInt(tMonth)
		tDay =parseInt(tDay)
		this.setState({ 
			appDate:[year,month,day],
			todayDate:[tYear,tMonth,tDay]
		});

	}

	

	handleComplete(){
		var obj={
			date:this.state.dataToMain,
			hour:this.state.hour,
			doctorId:this.state.doc,
			userId:'5afdccc96586d3161e1299e2'
		}
		$.ajax({
			url:'/app',
			type:'post',
			data:obj,
			success:function(data){
			}
		})
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
					<Button onClick={this.handleComplete} className={classes.button}>
					SEND
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