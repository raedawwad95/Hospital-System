import React from 'react';
import $ from 'jquery';

class retriveLabResults extends React.Component{
	constructor(props){
		super(props);
		this.state={
			labResults:[]
		}
	}

	componentDidMount() {
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/labRes',
 		success:function(data){
 			that.setState({
 				labResults:data
 			});
 			console.log(that.state.labResults)
 		}
		});
    }
render(){
	return(
		<div>
		<div className='card'>
			<div> <h2> All Labs Results </h2> <br /> </div> 
			<div className='container-fluid'>
				<table className="table table-bordered">
				    <thead style={{textAlign:'center'}}>
				      <tr>
				      	<th width='25%'>Id </th>
				        <th>Patient Name</th>
				        <th>Lab Technician Name</th>
				        <th>Medical Examination Time</th>
				        <th>Result Entry Time</th>
				        <th>Description</th>
				      </tr>
				    </thead>
				    <tbody style={{textAlign:'center'}}>
				    {this.state.labResults.map(function(item, index){
				    	return(

		        	     <tr key={index}>
					        <td>{item._id}</td>
					        <td>{item.patientId.FullName}</td>
					        <td>{item.labTechnicianId.fullName}</td>
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
	    <br/>
	    </div>
		)
	}

}

export default retriveLabResults;