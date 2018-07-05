import React from 'react';
import $ from 'jquery';
import { TextField, Grid,
    Button,CardActions,Table,TableBody,TableCell,TableHead,TableRow,Paper,withStyles, CircularProgress } from '@material-ui/core';
import Modal from 'react-modal';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import green from '@material-ui/core/colors/green';
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
//////////////////
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '10%',
    bottom                : '10%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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
	const styles = theme => ({
  	  input: {
	    display: 'none',
	  },
	   buttonSuccess: {
	    backgroundColor: green[500],
	    '&:hover': {
	      backgroundColor: green[700],
	    },
	    buttonProgress: {
	    color: green[500],
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    marginTop: -12,
	    marginLeft: -12,
	  },
	  },
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
	}
	});
class PatientDataAddRecord extends React.Component{
constructor(props){
	super(props);
	this.state={
		userData:[],
		username:'',
		description:'',
		image: '',
        modalIsOpen: false,
        modalIsOpenImageMedical: false, 
		modalIsOpenImageResult:false,
        loading: false,
		success: false,
		imageMedical:'',
		imageResult:''
     };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModalImageMedical = this.openModalImageMedical.bind(this);
    this.closeModalImageMedical = this.closeModalImageMedical.bind(this);
    this.openModalImageResult = this.openModalImageResult.bind(this);
    this.closeModalImageResult = this.closeModalImageResult.bind(this);
	this.retriveData=this.retriveData.bind(this);
	this.handleChange=this.handleChange.bind(this);
	this.addMedicalRecords=this.addMedicalRecords.bind(this);
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
handleChange(e){
	this.setState({
		[e.target.name]:e.target.value
	})
}
addMedicalRecords(){
	 var obj1={
		username:this.state.username, 
		description:this.state.description,
		image: this.state.image
	}
	var that=this;
	console.log(obj1)
	$.ajax({
		url:'/api/medical/addRecorde',
		type:"POST",
		data:obj1,
		success:(data)=>{
			console.log(data)
			alert("success");
		},
		error:(err)=>{
			console.log(err)
		}
	});
}
closeModal() {
this.setState({modalIsOpen: false});
}
openModal() {
this.setState({modalIsOpen: true});
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
onChangeImageRecord(e){
  var imgReader = new FileReader();
  var img = e.target.files[0];
  var that = this;
  var imgCode = '';
  imgReader.onload = function(upload) {
    imgCode = upload.target.result;
    imgCode = imgCode.slice(22);
    $.ajax({
      url: `https://api.imgur.com/3/image`,
      method: 'POST',
      headers: {"Authorization": "Client-ID 307e8453e9ee1b3"},
      data:imgCode
    })
    .done (function (data) {
      that.setState({
        image: data.data.link,
        loading: false,
        success: true,
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert("item not found, textStatus");
    });
  };
  imgReader.readAsDataURL(img)
}
handleButtonClick() {
if (!this.state.loading) {
  this.setState(
    {
      success: false,
      loading: true
    }
  );
}
}
render(){
var that =this;
const { classes } = this.props;
	const { loading, success } = this.state;
	const imageRecord = classNames({
      [classes.buttonSuccess]: success,
    });	

if(this.state.userData.length>0){
return(
	<div>
	<div className="card">
	<div> <h2 style={{textAlign:'center'}}> Patient data (Add Record) </h2> <br /> </div>
	<div className='container-fluid'>
	<Grid item xs={6} sm={3}>
        <TextField
          required
          id="userName"
          label="Username"
          placeholder="Enter Username"
          margin="normal"
          value={this.state.userName}
          name="username"
  		  onChange={this.handleChange}
        />
	</Grid>
	<CardActions>
	    <Button variant="raised" color="primary" onClick={this.retriveData} >
        	Retrive Data
      	</Button>
	</CardActions>
	<CardActions>
	    <Button variant="raised" color="primary" onClick={this.openModal} >
        	Add Record
      	</Button>
	</CardActions>
    <Modal
      isOpen={this.state.modalIsOpen}
      contentLabel="Add New Record"
      style={customStyles}
    >
		<div className="card">
	<div className='container-fluid'>
	<h2 style={{textAlign:'center'}}>Add New Record</h2>
    <Grid container spacing={24}>
	<Grid item xs={18} sm={9}>
		<TextField
          required
          id="description"
          label="Description"
          placeholder="Description"
          name="description"
          width="200"
          margin="normal"
          fullWidth
  		  onChange={this.handleChange}
        />
	</Grid>
	<Grid item xs={6} sm={3}>
		 <input
          	required
	        accept="image/*"
	        className={classes.input}
	        id="raised-button-file"
	        type="file"
	        onChange={this.onChangeImageRecord.bind(this)}
	      />
        <label htmlFor="raised-button-file">
	        <Button variant="raised" component="span" className={imageRecord} disabled={loading} onClick={this.handleButtonClick.bind(this)} >
	          Upload Record Image
	        </Button>
	      	{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
	    </label>
	</Grid>
	<CardActions>
	    <Button variant="raised" color="primary" onClick={this.addMedicalRecords} >
        	Add Medical Records
      	</Button>
	</CardActions>
	<CardActions>
	    <Button variant="raised" color="primary" onClick={this.closeModal} >
        	Close
      	</Button>
	</CardActions>	
	</Grid>
	</div>
	</div>
    </Modal>	
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
     <br/>
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
            <CustomTableCell numeric>{moment(item.medicalExaminationTime).calendar()}</CustomTableCell>
            <CustomTableCell numeric>{moment(item.resultEntryTime).calendar()}</CustomTableCell>
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
    <br/>
    <div className="card">
    <div className='container-fluid'>
      <h1 style={{textAlign:'center'}}>User Medical Records</h1>      	
	 <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
          <TableRow>
            <CustomTableCell>Doctor Name</CustomTableCell>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell>Date </CustomTableCell>
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
                <CustomTableCell>{moment(item.createdAt).calendar()}</CustomTableCell>
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
	<div> <h2 style={{textAlign:'center'}}> Patient data (Add Record) </h2> <br /> </div>
	<div className='container-fluid'>
	<Grid item xs={6} sm={3}>
		<TextField
          required
          id="username"
          label="UserName"
          placeholder="UserName"
          width="200"
          margin="normal"
          name="username"
  		  onChange={this.handleChange}
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
PatientDataAddRecord.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientDataAddRecord);
