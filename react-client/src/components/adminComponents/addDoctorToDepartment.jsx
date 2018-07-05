import React from 'react';
import $ from 'jquery';
import { withStyles, MenuItem, TextField, Input, InputLabel, InputAdornment,
		FormControl, Paper, Grid, CardHeader, FormHelperText,
		Button, Select, Card, CardActions, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';

	const styles = theme => ({
	  container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	  textField: {
	    width: 200,
	  },
	  menu: {
	    width: 200,
	  },
	  paper: {
    	padding: theme.spacing.unit * 2,
    	textAlign: 'center',
    	color: theme.palette.text.secondary,
  	  },
  	  margin: {
    	margin: theme.spacing.unit,
  	  },
  	  input: {
	    display: 'none',
	  },
	  formControl: {
	    margin: theme.spacing.unit,
	    minWidth: 120,
	  },
	  selectEmpty: {
	    marginTop: theme.spacing.unit * 2,
	  },
	  card: {
	    minWidth: 275,
	  },
	});
class addDoctorToDepartment extends React.Component{
constructor(props){
	super(props);
	this.state={
		depts:[],
		docName:'',
		selected:''
	}
	this.handleChange=this.handleChange.bind(this);
	this.add=this.add.bind(this)
}

componentDidMount() {
	var that=this;
	$.ajax({
	type:'GET',
	dataType: "json",
		url: '/dept',
		success:function(data){
			that.setState({
				depts:data
			})
		}
	});
}

handleChange(e){
	this.setState({
		[e.target.name]:e.target.value
	});
}

add(){
	var that=this;
	var obj={
		idOfDept:that.state.selected,
		docName:that.state.docName
	}
	$.ajax({
		type:'PUT',
		url:'/dept',
		data:obj,
		success:function(date){
			alert("success");
		}
	})
	
}

render(){
	const { classes } = this.props;
	return(
	<div>
		<Card className={classes.card}>
			<CardHeader
		        title="Add doctor to Department"
		      />
				<CardContent>
					<Grid container spacing={24}>
						<Grid item xs={6} sm={3}></Grid>
						<Grid item xs={6} sm={3}>
							<FormControl className={classes.formControl}>
					          <InputLabel htmlFor="add-Department">Department</InputLabel>
					          <Select
					            value={this.state.selected}
					            onChange={this.handleChange}
					            input={<Input name="selected" id="add-Department" />}
					          >
					            <MenuItem value="">
					              <em>None</em>
					            </MenuItem>
					            {this.state.depts.map(function(item, index){
									return(
										<MenuItem value={item.idOfDept} key={index}>{item.nameOfDept}</MenuItem>
									)
								})}	
					          </Select>
					          <FormHelperText>Select Department</FormHelperText>
					        </FormControl>
						</Grid> 
						<Grid item xs={6} sm={3}>
							<TextField
					          required
					          id="Add Doctor"
					          label="Add Doctor"
					          placeholder="Add Doctor"
					          className={classes.textField}
					          margin="normal"
					          value={this.state.docName}
					          name="docName"
			          		  onChange={this.handleChange}
					        />
						</Grid> 
						<Grid item xs={6} sm={3}></Grid>
						<Grid item xs={10} sm={5}></Grid>
						<CardActions>
							<Button variant="raised" color="primary" className={classes.button} onClick={this.add} >
					        	Submit
					      	</Button>
						</CardActions>
					</Grid>
				</CardContent>
			</Card>
	</div>
		)
}
}
addDoctorToDepartment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addDoctorToDepartment);