import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment'
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
class ChooseDate extends React.Component{
	constructor(props){
		super(props)
		this.state={
			   // date: moment(Date.now(), 'LLL'),
			   today: '',
			   dataToMain:''
		}
		this.handleChange=this.handleChange.bind(this)
		this.formatDate=this.formatDate.bind(this)
		this.test1=this.test1.bind(this)
	}

	componentDidMount(){
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

	handleChange(){
		console.log('data tal ',date.value)
	// var	date1= Date(date)
	// var	date2= Date.parse(date1)
	var test=this.formatDate(date.value)
	console.log('data tal ',test)
	this.setState({
		dataToMain:test
	})
	console.log('chose date ',this.state)
	this.props.cb(this.state)		
	}

	test1(){
		console.log(this.state)
		this.props.cb(this.state)
	}	
	

	render(){
		const classes=this.props
		// this.props.cb(this.state)

		return(
			<div>
			 <TextField
			  id="date"
		      label='chose the date'
		      type='date'
		      defaultValue="2018-05-24"
		      className={classes.textField}
		      dateFormat="LLL"
		      onChange={this.handleChange}
		      inputLabelProps={{
		      	shrink:true
		      }}
		      />

		      <button onClick={this.test1}>test1</button>
      </div>
			)
	}
}

ChooseDate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChooseDate) ;