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
		console.log('ho')
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/labRes',
 		success:function(data){
 			that.setState({
 				labResults:data
 			});
 		}
		});
    }
render(){
	
	
	
	description:{
		type:String
	}

	return(
		<div>
		 <table className="table table-bordered">
		    <thead>
		      <tr>
		        <th>Patient Id</th>
		        <th>Lab Technician Id</th>
		        <th>Medical Examination Time</th>
		        <th>Result Entry Time</th>
		        <th>Description</th>
		      </tr>
		    </thead>
		    <tbody>
		    {this.state.labResults.map(function(item){
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
		)
	}

}

export default retriveLabResults;