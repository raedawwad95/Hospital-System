import React from 'react';
import $ from 'jquery';
import { TextField, Grid,
		Button,CardActions} from 'material-ui';
import Modal from 'react-modal';

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
	var that =this;
	if(this.state.userData.length>0){


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
		    {this.state.userData.map(function(item, index){
		    	return(
        	     <tr key={index}>
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
         <br />
         <div className="card">
         <div className='container-fluid'>
          <h1 style={{textAlign:'center'}}>User Lab Result</h1>      	
		 <table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		        <th width='20%'>Id </th>
		        <th>Lab Technician Name</th>
		        <th>Medical Examination Time</th>
		        <th>Result Entry Time</th>
		        <th>Description</th>
		        <th>Image Result</th>
		      </tr>
		    </thead>		    
		    <tbody style={{textAlign:'center'}}>
		    {this.state.userData[0].labResults.map(function(item, index){
		    	return(
        	     <tr key= {index}>
			        <td>{item._id}</td>
			        <td>{item.labTechnicianId.fullName}</td>
			        <td>{item.medicalExaminationTime}</td>
			        <td>{item.resultEntryTime}</td>
			        <td>{item.description}</td>
			       <td><button style={{'background-color': 'white'}} value ={item.imageOfResult} onClick={that.openModalImageResult}>{item.imageOfResult}</button></td>
		         </tr>
		         )
            })}
		    </tbody>
         </table>
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
		 <table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		        <th width='20%'>Id </th>
		        <th>Doctor Name</th>
		        <th>Description</th>
		        <th>Image Medical</th>
		      </tr>
		    </thead>		    
		    <tbody style={{textAlign:'center'}}>
		    {this.state.userData[0].medicalRecords.map(function(item, index){
		    	return(
        	     <tr key={index}>
			        <td>{item._id}</td>
			        <td>{item.doctorId.fullName}</td>
			        <td>{item.description}</td>
			        <td value ={item.image}><button style={{'background-color': 'white'}} value ={item.image} onClick={that.openModalImageMedical}>{item.image}</button></td>
		         </tr>
		         )
            })}
		    </tbody>
         </table>
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
export default retrivePatient;