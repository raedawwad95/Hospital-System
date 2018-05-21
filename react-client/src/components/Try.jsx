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
	constructor(){
		super();
		this.state={
		date: null,
    	time: null,
    	activeStep:0
		}

		this.handleNext=this.handleNext.bind(this);
		this.getSteps=this.getSteps.bind(this);
		this.getStepContent=this.getStepContent.bind(this);
		this.handleBack=this.handleBack.bind(this);
		this.handleReset=this.handleReset.bind(this);
		
	}

	getSteps(){
		return ['step1','step2','step3'];
	}

	getStepContent(step){
		switch(step){
			case 0:
			return 'step1step1step1step1';
			case 1:
			return 'step2step2step2';
			case 3:
			return 'step3step3step3';
			default:
			return 'unknown step';

		}
	}
	
	handleNext(){
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

      <TextField
      label='fofa'
      type='date'
      defaultValue='2018-05-20'
      inputLabelProps={{
      	shrink:true
      }}
      />

 
      	</div>
			)
	}


}
Try.propTypes = {
  classes: PropTypes.object,
};

        // <DatePicker onChange={this.handleDate} value ={this.state.date} hintText="Date to be completed by" />

export default withStyles(styles)(Try);