import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { withStyles, TextField, Paper, Grid,
		Button, Card, CardActions, CardContent, CardHeader } from 'material-ui';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  card: {
    minWidth: 275,
  },
  cardHeader: {

  }
});
class AddDepartment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			deptName:'',
			deptId:''
		}
		this.handelChange=this.handelChange.bind(this);
		this.add=this.add.bind(this);
	}

	handelChange(e){
		this.setState({
			 [e.target.name]: e.target.value 
		})
	}

	add(){
		var that=this;
		var obj={
			nameOfDept:that.state.deptName,
			idOfDept:that.state.deptId
		}
		$.ajax({
			type:'POST',
			url:'/dept',
			data:obj,
			dataType: "json",
			success:function(data){
				console.log('good')
			},
			failure: function(errMsg) {
            console.log('error');
            }
		})
	}

	render(){
		const { classes } = this.props;
		return(
			<div>
				<Card className={classes.card}>
				<CardHeader
			        title="Add New Department"
			      />
					<CardContent>
						<Grid container spacing={24}>
							<Grid item xs={6} sm={3}></Grid>
							<Grid item xs={6} sm={3}>
								<TextField
						          required
						          id="Department-name"
						          label="Department name"
						          placeholder="Department name"
						          className={classes.textField}
						          margin="normal"
						          value={this.state.deptName}
						          name="deptName"
				          		  onChange={this.handelChange}
						        />
							</Grid> 
							<Grid item xs={6} sm={3}>
								<TextField
						          required
						          id="Department-id"
						          label="Department id"
						          placeholder="Department id"
						          className={classes.textField}
						          margin="normal"
						          value={this.state.deptId}
						          name="deptId"
				          		  onChange={this.handelChange}
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

AddDepartment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDepartment);
