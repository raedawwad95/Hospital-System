import React from 'react';
import $ from 'jquery';
import { TextField, Grid,
		Button,CardActions} from 'material-ui';

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
	return(
		<div>
		<div className="card">
		<div className='container-fluid'>	
	    <h1 style={{textAlign:'center'}}>Patients data</h1>      	
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
         </div>
		)	

}
}
export default retrivePatient;