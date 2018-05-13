import React from 'react';
import $ from 'jquery';
import { TextField, Grid,
		Button,CardActions} from 'material-ui';

class retrivePatient extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userData:[],
			username:'',
		}
		this.onChange=this.onChange.bind(this);
		this.retriveData=this.retriveData.bind(this);
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
 			console.log(that.state.userData[0].labResults)
 		}
		});
    }
render(){
	console.log()
	if(this.state.userData.length>0){


	return(
		<div>
		<div className="card">
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
         <div className="card">
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
	    <div className="card">
          <h1 style={{textAlign:'center'}}>User Medical Records</h1>      	
		 <table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		        <th width='20%'>Id </th>
		        <th>Doctor Id</th>
		        <th>Description</th>
		      </tr>
		    </thead>		    
		    <tbody style={{textAlign:'center'}}>
		    {this.state.userData[0].medicalRecords.map(function(item){
		    	return(
        	     <tr>
			        <td>{item._id}</td>
			        <td>{item.doctorId}</td>
			        <td>{item.description}</td>
		         </tr>
		         )
            })}
		    </tbody>
         </table>
	    </div>
	    </div>
		)
	}else{
			return(
		<div>
		<div className="card">
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
	    )
	
}

}
}
export default retrivePatient;