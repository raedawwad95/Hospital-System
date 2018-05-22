import React from 'react';
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
import ChooseDate from './ChoseDate.jsx'
import ChooseTime from './ChoseTime.jsx'
import ChooseDoctor from './ChooseDoctor.jsx'
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


class Try extends React.Component{
	constructor(props){

		super(props);
		this.state={
		date: null,
    	time: null,
    	activeStep:0,
    	appDate:[],
    	todayDate:[]
		}
		console.log('ksladjlkaslkd ',this.props)

		this.handleNext=this.handleNext.bind(this);
		this.getSteps=this.getSteps.bind(this);
		this.getStepContent=this.getStepContent.bind(this);
		this.handleBack=this.handleBack.bind(this);
		this.handleReset=this.handleReset.bind(this);
		this.chooseDateData=this.chooseDateData.bind(this)

	}

	getSteps(){
		return ['Choose Doctor','Choose Date','Choose Time','final step'];
	}

	getStepContent(step){
		switch(step){
			case 0:
			return <ChooseDoctor />;
			case 1:
			return <ChooseDate cb={this.chooseDateData}/>;
			case 2:
			return <ChooseTime />;
			case 3:
			return 'sadas';

		}
	}
		

	handleNext(){
		console.log('this state next',this.state)
		this.setState({
			activeStep:this.state.activeStep +1
		})
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

		console.log('datadatadatadatadata ',this.state)
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
		console.log('tdaytday ',typeof(tDay))
		this.setState({ 
			appDate:[year,month,day],
			todayDate:[tYear,tMonth,tDay]
		});

		
	}

	// x(year,month,day,tYear,tMonth,tDay){
	// 	console.log('year ',year)
	// 	console.log('month ',month)	
	// 	console.log('day ',day)	
	// 	console.log('tYear ',tYear)	
	// 	console.log('tMonth ',tMonth)	
	// 	console.log('tDay ',tDay)	
	// 	this.setState({
	// 		appDate:[year,month,day],

	// 	})
	// 	// console.log('uuuuuuuuuuuuuuuuuuuu ',this.state)
	// }

	// addToState(year,month,day,tYear,tMonth,tDay){
	// 	this.setState({
	// 		appDate:[year,month,day],
	// 		todayDate:[tYear,tMonth,tDay]
	// 	})
	// }

	render(){
		console.log('this.state ',this.state)
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

     

 
      	</div>
			)
	}


}
Try.propTypes = {
  classes: PropTypes.object,
};

        // <DatePicker onChange={this.handleDate} value ={this.state.date} hintText="Date to be completed by" />

export default withStyles(styles)(Try);