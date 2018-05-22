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
import ChooseDate from './ChoseDate.jsx';
import ChooseTime from './ChoseTime.jsx';
import ChooseDoctor from './ChooseDoctor.jsx';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

class Appoinment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			activeStep:0,
		}
	}



	handleNext(e){
		this.setState({
			activeStep:this.state.activeStep +1
		})
	}


	render(){
		const classes = this.props;

		var that=this
		return(
			<div>
				<Stepper activeStep={this.state.activeStep} orientation="vertical">
					<Step>	
						<StepLabel>chose Doctor</StepLabel>
						<StepContent>
						<Typography>hello</Typography>
						<div>
						<Button
						variant="raised"
						color="primary"
						onClick={that.handleNext}
						>
						</Button>
						</div>
						</StepContent>

					</Step>
					<Step>	
						<StepLabel>step2</StepLabel>
						<StepContent>
						<Typography>hello</Typography>
						<div>
						<Button
						variant="raised"
						color="primary"
						onClick={that.handleNext}
						>
						</Button>
						</div>
						</StepContent>

					</Step>
				</Stepper>
			</div>
			)
	}
}

// export default Appoinment;

Appoinment.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Appoinment);