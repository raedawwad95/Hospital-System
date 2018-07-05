import React from 'react';
import $ from 'jquery';
import { Grid,Button,CardActions,FormControl,FormHelperText,InputLabel,
    Select,Table,MenuItem,Input,TableBody,TableCell,TableHead,TableRow,Paper,withStyles} from '@material-ui/core';
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
const customStyles1 = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : '10%',
    bottom                : '10%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class RetriveDoctorInDepartment extends React.Component{
constructor(props){
	super(props);
	this.state={
		departmentData:[],
		nameOfDep:'',
		depts:[]
	}
	this.onChange=this.onChange.bind(this);
	this.retriveData=this.retriveData.bind(this);
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
onChange(e){
	this.setState({
		nameOfDep:e.target.value
	})
}
retriveData() {
	var that=this;
	$.ajax({
	type:'GET',
	dataType: "json",
		url: '/dept/'+that.state.nameOfDep,
		success:function(data){
			that.setState({
				departmentData:data
			});
		}
	});
}
render(){
const { classes } = this.props;
if(this.state.departmentData.length>0){
return(
	<div>
	<div className="card">
	<div> <h2 style={{textAlign:'center'}}> Doctors In The Department</h2> <br /> </div> 
	<div className='container-fluid'>
	<Grid item xs={6} sm={3}>
		<FormControl >
          <InputLabel>Department</InputLabel>
          <Select
            value={this.state.nameOfDep}
            onChange={this.onChange}
            input={<Input name="nameOfDep" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.state.depts.map(function(item, index){
				return(
					<MenuItem value={item.nameOfDept} key={index}>{item.nameOfDept}</MenuItem>
				)
			})}	
          </Select>
          <FormHelperText>Select Department</FormHelperText>
        </FormControl>
	</Grid>
	<CardActions>
	    <Button variant="raised" color="primary" onClick={this.retriveData} >
        	Retrive Data
      	</Button>
	</CardActions>	
    <h1 style={{textAlign:'center'}}>Department Data</h1>
    <Paper className={classes.root}>
     <Table className={classes.table}>
      <TableHead>
      <TableRow>
        <CustomTableCell>Name Of Dept</CustomTableCell>
        <CustomTableCell numeric>Id Of Dept</CustomTableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {this.state.departmentData.map((item, index) =>{
        return (
          <TableRow className={classes.row} key={index}>
            <CustomTableCell component="th" scope="row">
              {item.nameOfDept}
            </CustomTableCell>
            <CustomTableCell numeric>{item.idOfDept}</CustomTableCell>
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
     <div className="card">
     <div className='container-fluid'>
     <h1 style={{textAlign:'center'}}>Doctors in the Department</h1>
     <Paper className={classes.root}>
     <Table className={classes.table}>
      <TableHead>
      <TableRow>
        <CustomTableCell>User Name</CustomTableCell>
        <CustomTableCell>Full Name</CustomTableCell>
        <CustomTableCell numeric>Hours Of Work</CustomTableCell>
        <CustomTableCell>Spicility Status</CustomTableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {this.state.departmentData[0].doctorsId.map((item, index) =>{
        return (
          <TableRow className={classes.row} key={index}>
            <CustomTableCell component="th" scope="row">
              {item.userName}
            </CustomTableCell>
            <CustomTableCell>{item.fullName}</CustomTableCell>
            <CustomTableCell numeric>{item.hoursOfWork}</CustomTableCell>
            <CustomTableCell>{item.spicilityStatus}</CustomTableCell>
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
}else{
		return(
	<div>
	<div className="card">
	<div> <h2 style={{textAlign:'center'}}> Doctors In The Department </h2> <br /> </div> 
	<div className='container-fluid'>
	<Grid item xs={6} sm={3}>
		<FormControl >
          <InputLabel>Department</InputLabel>
          <Select
            value={this.state.nameOfDep}
            onChange={this.onChange}
            input={<Input name="nameOfDep" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.state.depts.map(function(item, index){
				return(
					<MenuItem value={item.nameOfDept} key={index}>{item.nameOfDept}</MenuItem>
				)
			})}	
          </Select>
          <FormHelperText>Select Department</FormHelperText>
        </FormControl>
	</Grid>
	<CardActions>
	    <Button variant="raised" color="primary" onClick={this.retriveData} >
        	Retrive Data
      	</Button>
	</CardActions>	
	</div>
	</div>
    </div>
    )
}
}
}
RetriveDoctorInDepartment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RetriveDoctorInDepartment);