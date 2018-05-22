import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class ChooseTime extends React.Component{
	constructor(props){
		super(props)
		this.state={
			time:"00:00"
		}
		this.handleChange=this.handleChange.bind(this)
	}
	
	handleChange(e){
		this.setState({
			time:e.target.value
		})
    console.log('ChooseTime state ',this.state.time);
    
	}

	render(){
		const classes=this.props
		return(
			<TextField
        type="time"
        value={this.state.time}
        onChange={this.handleChange}
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

}

export default ChooseTime;