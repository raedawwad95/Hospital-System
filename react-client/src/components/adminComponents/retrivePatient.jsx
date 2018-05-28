import React from 'react';
import $ from 'jquery';
import { TextField, Grid,
    Button,CardActions,Table,TableBody,TableCell,TableHead,TableRow,Paper,withStyles} from 'material-ui';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import moment from 'moment';

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
class retrivePatient extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userData:[],
			username:'',
			modalIsOpenImageMedical: false, 
    		modalIsOpenImageResult:false,
    		imageMedical:'',
    		imageResult:''
		}
		this.onChange=this.onChange.bind(this);
		this.retriveData=this.retriveData.bind(this);
	    this.openModalImageMedical = this.openModalImageMedical.bind(this);
	    this.closeModalImageMedical = this.closeModalImageMedical.bind(this);
	    this.openModalImageResult = this.openModalImageResult.bind(this);
	    this.closeModalImageResult = this.closeModalImageResult.bind(this);
	}
	onChange(e){
		this.setState({
			username:e.target.value
		})
	}
	retriveData() {
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/api/userController/'+that.state.username,
 		success:function(data){
 			that.setState({
 				userData:data
 			});
 		}
		});
    }
    closeModalImageMedical() {
		this.setState({modalIsOpenImageMedical: false});
   }
    openModalImageMedical(e) {
		this.setState({
			modalIsOpenImageMedical: true,
			imageMedical:e.target.value
		});
    }
    closeModalImageResult(){
    	this.setState({modalIsOpenImageResult: false});
    }
    openModalImageResult(e) {
    	this.setState({
	    	modalIsOpenImageResult: true,
	    	imageResult:e.target.value
	    });
    }
render(){
	const { classes } = this.props;
	var that =this;
	if(this.state.userData.length>0){


	return(
		<div>
		<div className="card">
		<div> <h2 style={{textAlign:'center'}}> Patient data </h2> <br /> </div> 
		<div className='container-fluid'>
		<Grid item xs={6} sm={3}>
			<TextField
	          required
	          id="username"
	          label="UserName"
	          placeholder="UserName"
	          width="200"
	          margin="normal"
      		  onChange={this.onChange}
	        />
		</Grid>
		<CardActions>
		    <Button variant="raised" color="primary" onClick={this.retriveData} >
	        	Retrive Data
	      	</Button>
		</CardActions>	
	    <h1 style={{textAlign:'center'}}>User Data</h1>      	
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
         <div className="card">
         <div className='container-fluid'>
          <h1 style={{textAlign:'center'}}>User Lab Result</h1>      	
		 <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
          <TableRow>
            <CustomTableCell>Lab Technician Name</CustomTableCell>
            <CustomTableCell numeric>Medical Examination Time</CustomTableCell>
            <CustomTableCell numeric>Result Entry Time</CustomTableCell>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell>Image Result</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.userData[0].labResults.map((item, index) =>{
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell component="th" scope="row">
                  {item.labTechnicianId.fullName}
                </CustomTableCell>
                <CustomTableCell numeric>{moment(item.medicalExaminationTime).fromNow()}</CustomTableCell>
                <CustomTableCell numeric>{moment(item.resultEntryTime).fromNow()}</CustomTableCell>
                <CustomTableCell>{item.description}</CustomTableCell>
                <CustomTableCell><button style={{'background-color': 'white'}} value ={item.imageOfResult} onClick={that.openModalImageResult}>Show Result Image</button></CustomTableCell>
              </TableRow>
            );
          })}
          </TableBody>
         </Table>
        </Paper> 
        <br/>
         </div>
	    </div>
	     <Modal
          isOpen={this.state.modalIsOpenImageResult}
          contentLabel="Add New Record"
          style={customStyles1}
        >
 		<div className="card">
		<div className='container-fluid'>
	
	    <Grid container spacing={24}>
	    <Grid item xs={24} sm={12}>
	        <img  style={{textAlign:'center'}} src ={this.state.imageResult}></img>
		<CardActions>
		    <Button variant="raised" color="primary" onClick={this.closeModalImageResult} >
	        	Close
	      	</Button>
		</CardActions>	
		</Grid>
		</Grid>
		</div>
		</div>
        </Modal>
	    <br />
	    <div className="card">
	    <div className='container-fluid'>
          <h1 style={{textAlign:'center'}}>User Medical Records</h1>      	
		<Paper className={classes.root}>
	        <Table className={classes.table}>
	          <TableHead>
	          <TableRow>
	            <CustomTableCell>Doctor Name</CustomTableCell>
	            <CustomTableCell>Description</CustomTableCell>
	            <CustomTableCell>Image Medical</CustomTableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	           {this.state.userData[0].medicalRecords.map(function(item, index){
	            return (
	              <TableRow className={classes.row} key={index}>
	                <CustomTableCell component="th" scope="row">
	                  {item.doctorId.fullName}
	                </CustomTableCell>
	                <CustomTableCell>{item.description}</CustomTableCell>
	                <CustomTableCell><button style={{'background-color': 'white'}} value ={item.image} onClick={that.openModalImageMedical}>Show Medical Image</button></CustomTableCell>
	              </TableRow>
	            );
	          })}
	        </TableBody>
	      </Table>
         </Paper>
         <br/>
	    </div>
	    </div>
	     <Modal
          isOpen={this.state.modalIsOpenImageMedical}
          contentLabel="Add New Record"
          style={customStyles1}
        >
 		<div className="card">
		<div className='container-fluid'>
	
	    <Grid container spacing={24}>
	    <Grid item xs={24} sm={12}>
	        <img  style={{textAlign:'center'}} src ={this.state.imageMedical}></img>
		<CardActions>
		    <Button variant="raised" color="primary" onClick={this.closeModalImageMedical} >
	        	Close
	      	</Button>
		</CardActions>	
		</Grid>
		</Grid>
		</div>
		</div>
        </Modal>
	    <br />
	    </div>
	    
		)
	}else{
			return(
		<div>
		<div className="card">
		<div> <h2> Patient data </h2> <br /> </div> 
		<div className='container-fluid'>
		<Grid item xs={6} sm={3}>
			<TextField
	          required
	          id="username"
	          label="UserName"
	          placeholder="UserName"
	          width="200"
	          margin="normal"
      		  onChange={this.onChange}
	        />
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
retrivePatient.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(retrivePatient);