import React from 'react';
import $ from 'jquery';

class retriveAllDoctor extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[]
		}
	}

	componentDidMount() {
		console.log('ho')
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

	return(
	<div>
	<div className='card'>
	<div> <h2> All Doctors </h2> <br /> </div> 
	<div className='container-fluid'>
	<table className="table table-bordered">

	<thead style={{textAlign:'center'}}>
	  <tr>
	  	<th width="15%">Id</th>
	    <th>User Name</th>
	    <th width="25%">Full Name</th>
	    <th>National Id</th>
	    <th>Hospital Id</th>
	    <th>Department</th>
	    <th>Spicility Status</th>
	    <th>Hours Of Work</th>
	    <th>Gender</th>
	    <th>Doctor Type</th>
	  </tr>
	</thead>

	<tbody style={{textAlign:'center'}}>
	{ this.state.doctors.map(function(item){
	return(
		<tr>
		    <td>{item._id}</td>
	        <td>{item.userName}</td>
	        <td>{item.fullName}</td>
	        <td>{item.nationalId}</td>
	        <td>{item.hospitalId}</td>
	        <td>{item.department}</td>
	        <td>{item.spicilityStatus}</td>
	        <td>{item.hoursOfWork}</td>
	        <td>{item.gender}</td>
	        <td>{item.doctorType}</td>
	    </tr>

		)
	})}
	</tbody>
	</table>
	</div>
	</div>
	</div>
		)
	}

}

export default retriveAllDoctor;