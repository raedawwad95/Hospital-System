import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { withStyles, InputAdornment, Paper, Grid, CardHeader,
		Button, Card, CardActions, CardContent, 
		Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import moment from 'moment';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
   button: {
    margin: theme.spacing.unit,
  },
});

class RetriveEmergency extends React.Component{
	constructor(props){
		super(props);
		this.state={
			emergency:[]
		}
		this.delete = this.delete.bind(this)
	}

	componentDidMount() {
    	var that=this;
    	$.ajax({
	    	type:'GET',
			dataType: "json",
	 		url: '/emergency',
	 		success:function(data){
	 			that.setState({
	 				emergency:data
	 			});
    			console.log(that.state.emergency);
	 		}
		});
    }

    delete(id){
 		var that=this;
 		var id = id.target.value
 		var obj = {
 			_id : id
 		}
 		$.ajax({
 			type:"Delete",
 			url:'/emergency',
 			data:obj,
 			success:function(data){
 				alert('data deleted')
 				that.componentDidMount();
 			},
 			error:function(err){
 				console.log(err)
 			}
 		})
 	}

render(){
	const { classes } = this.props;
	if (this.state.emergency.length === 0) {
		return (
			<h3> No emergency calls </h3>
		)
	}
	return(
		<Paper className={classes.root}>
	      <Table className={classes.table}>
	        <TableHead>
	          <TableRow>
	            <CustomTableCell>Name</CustomTableCell>
	            <CustomTableCell numeric>Phone</CustomTableCell>
	            <CustomTableCell numeric>Long</CustomTableCell>
	            <CustomTableCell numeric>Lat</CustomTableCell>
	            <CustomTableCell>Created At</CustomTableCell>
	            <CustomTableCell>Delete</CustomTableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {this.state.emergency.map(n => {
	            return (
	              <TableRow className={classes.row} key={n.id}>
	                <CustomTableCell component="th" scope="row">
	                  {n.user.FullName}
	                </CustomTableCell>
	                <CustomTableCell numeric>{n.user.phone}</CustomTableCell>
	                <CustomTableCell numeric>{n.longitude}</CustomTableCell>
	                <CustomTableCell numeric>{n.latitude}</CustomTableCell>
	                <CustomTableCell>{moment(n.createdAt).calendar()}</CustomTableCell>
	                <CustomTableCell>
	                	<button value={n._id} onClick={this.delete} className='btn btn-danger'>
				        	Delete
				        </button>
				    </CustomTableCell>
	              </TableRow>
	            );
	          })}
	        </TableBody>
	      </Table>
	    </Paper>
		)
	}

}

RetriveEmergency.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RetriveEmergency);