import React from 'react';
import $ from 'jquery';
import { Table,TableBody,TableCell,TableHead,TableRow,Paper,withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

//this for Table
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
});

class retriveAllDepts extends React.Component{
	constructor(props){
		super(props);
		this.state={
			depts:[]
		}
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
 			});
 		}
		});

    }

render(){
	const { classes } = this.props;
	return(
		<div>
		<div className="card">
			<div> <h2 style={{textAlign:'center'}}>All Departments</h2> <br /> </div>
			<div className="container">
			<Paper className={classes.root}>
	        <Table className={classes.table}>
	          <TableHead>
	          <TableRow>
	            <CustomTableCell>Name Of Dept</CustomTableCell>
	            <CustomTableCell>Id Of Dept</CustomTableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	           {this.state.depts.map(function(item, index){
	            return (
	              <TableRow className={classes.row} key={index}>
	                <CustomTableCell component="th" scope="row">
	                  {item.nameOfDept}
	                </CustomTableCell>
	                <CustomTableCell>{item.idOfDept}</CustomTableCell>
	              </TableRow>
	            );
	          })}
	        </TableBody>
	      </Table>
         </Paper>
         <br/>
         </div>
	    </div>
	    </div>
		)
	}

}

retriveAllDepts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(retriveAllDepts);