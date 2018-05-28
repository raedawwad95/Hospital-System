import React from 'react';
import $ from 'jquery';
import { Table,TableBody,TableCell,TableHead,TableRow,Paper,withStyles } from 'material-ui';
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

class retriveAllDoctor extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[]
		}
	}

	componentDidMount() {
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/Doctor/retrieve',
 		success:function(data){
 			that.setState({
 				doctors:data
 			})
 		}
		});

    }

render(){
	const { classes } = this.props;
	return(
	<div>
	<div className='card'>
	<div> <h2 style={{textAlign:'center'}}> All Doctors </h2> <br /> </div> 
	<div className='container-fluid'>
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
      <TableRow>
        <CustomTableCell>User Name</CustomTableCell>
        <CustomTableCell>Full Name</CustomTableCell>
        <CustomTableCell numeric>National Id</CustomTableCell>
        <CustomTableCell numeric>Hospital Id</CustomTableCell>
        <CustomTableCell>Department</CustomTableCell>
        <CustomTableCell>Spicility Status</CustomTableCell>
        <CustomTableCell numeric>Hours Of Work</CustomTableCell>
        <CustomTableCell>Gender</CustomTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {this.state.doctors.map((item, index) =>{
        return (
          <TableRow className={classes.row} key={index}>
            <CustomTableCell component="th" scope="row">
              {item.userName}
            </CustomTableCell>
            <CustomTableCell>{item.fullName}</CustomTableCell>
            <CustomTableCell numeric>{item.nationalId}</CustomTableCell>
            <CustomTableCell numeric>{item.hospitalId}</CustomTableCell>
            <CustomTableCell>{item.department}</CustomTableCell>
            <CustomTableCell>{item.spicilityStatus}</CustomTableCell>
            <CustomTableCell numeric>{item.hoursOfWork}</CustomTableCell>
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
	<Statistics doctors={this.state.doctors} />
	</div>
		)
	}

}

retriveAllDoctor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(retriveAllDoctor);