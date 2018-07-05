import React from 'react';
import $ from 'jquery';
import { Table,TableBody,TableCell,TableHead,TableRow,Paper,withStyles} from '@material-ui/core';
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

class retrivePatient extends React.Component{
constructor(props){
	super(props);
	this.state={
		userData:[],
	}
}
componentDidMount() {
  	var that=this;
  	$.ajax({
  	type:'GET',
	dataType: "json",
		url: '/api/userController/retrive/allPatient',
		success:function(data){
			that.setState({
				userData:data
			});
		}
	});
  }
render(){
const { classes } = this.props;
return(
<div>
<div className="card">
<div className='container-fluid'>	
  <h1 style={{textAlign:'center'}}>Patients data</h1>      	
<Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
      <TableRow>
        <CustomTableCell>User Name</CustomTableCell>
        <CustomTableCell>Full Name</CustomTableCell>
        <CustomTableCell numeric>Id Card Number</CustomTableCell>
        <CustomTableCell numeric>Phone</CustomTableCell>
        <CustomTableCell>Email</CustomTableCell>
        <CustomTableCell>Gender</CustomTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {this.state.userData.map((item, index) =>{
        return (
          <TableRow className={classes.row} key={index}>
            <CustomTableCell component="th" scope="row">
              {item.username}
            </CustomTableCell>
            <CustomTableCell>{item.FullName}</CustomTableCell>
            <CustomTableCell numeric>{item.idCardNumber}</CustomTableCell>
            <CustomTableCell numeric>{item.phone}</CustomTableCell>
            <CustomTableCell>{item.email}</CustomTableCell>
            <CustomTableCell>{item.gender}</CustomTableCell>
          </TableRow>
        );
      })}
      </TableBody>
    </Table>
  </Paper>
  <br/>
     </div> 
     </div>   
     <br />
     </div>
)	
}
}
retrivePatient.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(retrivePatient);