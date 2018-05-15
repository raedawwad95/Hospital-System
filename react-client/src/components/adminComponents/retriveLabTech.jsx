import React from 'react';
import $ from 'jquery';

class retriveLabTech extends React.Component{
	constructor(props){
		super(props);
		this.state={
			labTechs:[]
		}
	}

	componentDidMount() {
		console.log('ho')
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/labTech',
 		success:function(data){
 			that.setState({
 				labTechs:data
 			})
 		}
		});

    }

render(){	
	return(
	<div>
	<div className='card'>
		<div> <h2> All labs technicians </h2> <br /> </div> 
		<div className='container-fluid'>
			<table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		      	<th width='25%'>Id</th>
		        <th>User Name</th>
		        <th>Full Name</th>
		        <th>idNone</th>
		        <th>Hours Of Work</th>
		        <th>Techncian Type</th>
		        <th>Gender</th>
		      </tr>
		    </thead>
		    <tbody style={{textAlign:'center'}}>
		    { this.state.labTechs.map(function(item){
				return(
					<tr>
					    <td>{item._id}</td>
				        <td>{item.userName}</td>
				        <td>{item.fullName}</td>
				        <td>{item.id}</td>
				        <td>{item.workHour}</td>
				        <td>{item.techncianType}</td>
				        <td>{item.gender}</td>
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

export default retriveLabTech;