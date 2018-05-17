import React from 'react';
import $ from 'jquery';
import { TextField, Grid,
		Button,CardActions,withStyles,CircularProgress } from 'material-ui';
import Modal from 'react-modal';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import green from 'material-ui/colors/green';

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
	  
	});
class AddLabResult extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userData:[],
			username:'',
			patientId:'',
			labTechnicianId:'',
			medicalExaminationTime:'',
			resultEntryTime:'',
			imageOfResult:'',
			description:'',
            modalIsOpen: false,
            loading: false,
    		success: false,
         };

	 
	    this.openModal = this.openModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
		this.onChange=this.onChange.bind(this);
		this.retriveData=this.retriveData.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.addLabResult=this.addLabResult.bind(this);
	
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
	addLabResult(){
		 var obj1={
			username:this.state.username, 
			description:this.state.description,
			image: this.state.image
		}
		$.ajax({
			url:'/api/medical/addRecorde',
			type:"POST",
			data:obj1,
			success:(data)=>{
				console.log(data)
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

    onChangeImageLabResult(e){
      var imgReader = new FileReader();
      var img = e.target.files[0];
      var that = this;
      var imgCode = ''
      // var target = e.target.name;
      imgReader.onload = function(upload) {
        imgCode = upload.target.result
        imgCode = imgCode.slice(22)
        $.ajax({
          url: `https://api.imgur.com/3/image`,
          method: 'POST',
          headers: {"Authorization": "Client-ID bb8a64e82b834b5"},
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
	const { classes } = this.props;
		const { loading, success } = this.state;
		const imageResult = classNames({
	      [classes.buttonSuccess]: success,
	    });	
	if(this.state.userData.length>0){


	return(
		<div>
		<div className="card">
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
		<h2 style={{textAlign:'center'}}>Add New Lab Result</h2>
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
      		  onChange={this.onChange}
	        />
		</Grid>
		<Grid item xs={6} sm={3}>
			 <input
              	required
		        accept="image/*"
		        className={classes.input}
		        id="raised-button-file"
		        type="file"
		        onChange={this.onChangeImageLabResult.bind(this)}
		      />
            <label htmlFor="raised-button-file">
		        <Button variant="raised" component="span" className={imageResult} disabled={loading} onClick={this.handleButtonClick.bind(this)} >
		          Upload Result Image
		        </Button>
		      	{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		    </label>
		</Grid>
		<CardActions>
		    <Button variant="raised" color="primary" onClick={this.addLabResult} >
	        	Add Lab Result
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
		 <table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		        <th>Id</th>
		        <th>User Name</th>
		        <th>Full Name</th>
		        <th>Id Card Number</th>
		        <th>Phone</th>
		        <th>Email</th>
		        <th>User Type</th>
		        <th>Gender</th>
		      </tr>
		    </thead>		    
		    <tbody>
		    {this.state.userData.map(function(item){
		    	return(
        	     <tr>
			        <td>{item._id}</td>
			        <td>{item.username}</td>
			        <td>{item.FullName}</td>
			        <td>{item.idCardNumber}</td>
			        <td>{item.phone}</td>
			        <td>{item.email}</td>
			        <td>{item.userType}</td>
			        <td>{item.gender}</td>
		         </tr>
		         )
            })}
		    </tbody>
         </table>
         </div>
         </div>
         <br/>
         <div className="card">
         <div className='container-fluid'>
          <h1 style={{textAlign:'center'}}>User Lab Result</h1>      	
		 <table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		        <th width='20%'>Id </th>
		        <th>Lab Technician Id</th>
		        <th>Medical Examination Time</th>
		        <th>Result Entry Time</th>
		        <th>Description</th>
		      </tr>
		    </thead>		    
		    <tbody style={{textAlign:'center'}}>
		    {this.state.userData[0].labResults.map(function(item){
		    	return(
        	     <tr>
			        <td>{item._id}</td>
			        <td>{item.labTechnicianId}</td>
			        <td>{item.medicalExaminationTime}</td>
			        <td>{item.resultEntryTime}</td>
			        <td>{item.description}</td>
		         </tr>
		         )
            })}
		    </tbody>
         </table>
	    </div>
	    </div>
	    </div>
		)
	}else{
			return(
		<div>
		<div className="card">
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

AddLabResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddLabResult);
