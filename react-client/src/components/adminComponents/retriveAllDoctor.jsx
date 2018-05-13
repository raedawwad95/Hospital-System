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
	    <table className="table table-bordered">
    <thead>
      <tr>
      	<th>Id</th>
        <th>User Name</th>
        <th>Full Name</th>
        <th>National Id</th>
        <th>Hospital Id</th>
        <th>Department</th>
        <th>Spicility Status</th>
        <th>Hours Of Work</th>
        <th>Gender</th>
        <th>Doctor Type</th>
      </tr>
    </thead>
    <tbody>
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
			)
	}

}

export default retriveAllDoctor;