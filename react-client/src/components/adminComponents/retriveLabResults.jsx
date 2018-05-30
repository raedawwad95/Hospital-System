import React from 'react';
import $ from 'jquery';
import {Table,TableBody,TableCell,TableHead,TableRow,Paper,withStyles} from 'material-ui';
import PropTypes from 'prop-types';
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
});
class retriveLabResults extends React.Component{
	constructor(props){
		super(props);
		this.state={
			labResults:[]
		}
	}

	componentDidMount() {
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/labRes',
 		success:function(data){
 			that.setState({
 				labResults:data
 			});
 		}
		});
    }
render(){
	const { classes } = this.props;
	return(
		<div>
		<div className='card'>
		<div> <h2 style={{textAlign:'center'}}> All Labs Results </h2> <br /> </div> 
		<div className='container-fluid'>
		<Paper className={classes.root}>
	     <Table className={classes.table}>
	      <TableHead>
	      <TableRow>
	        <CustomTableCell>Patient Namee</CustomTableCell>
	        <CustomTableCell>Lab Technician Name</CustomTableCell>
	        <CustomTableCell numeric>Medical Examination Time</CustomTableCell>
	        <CustomTableCell numeric>Result Entry Time</CustomTableCell>
	        <CustomTableCell>Description</CustomTableCell>
	      </TableRow>
	     </TableHead>
	     <TableBody>
	      {this.state.labResults.map((item, index) =>{
	        return (
	          <TableRow className={classes.row} key={index}>
	            <CustomTableCell component="th" scope="row">
	              {item.patientId.FullName}
	            </CustomTableCell>
	            <CustomTableCell>{item.labTechnicianId.fullName}</CustomTableCell>
	            <CustomTableCell numeric>{moment(item.medicalExaminationTime).calendar()}</CustomTableCell>
	            <CustomTableCell numeric>{moment(item.resultEntryTime).calendar()}</CustomTableCell>
	            <CustomTableCell>{item.description}</CustomTableCell>
	          </TableRow>
	        );
	      })}
	        </TableBody>
	     </Table>
		</Paper>
		     <br/>
     	</div>
	    </div>
	    <br/>
	    </div>
		)
	}

}

retriveLabResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(retriveLabResults);