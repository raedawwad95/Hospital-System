import React from 'react';
import $ from 'jquery';

class retriveAllDepts extends React.Component{
	constructor(props){
		super(props);
		this.state={
			depts:[]
		}
	}

	componentDidMount() {
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/dept',
 		success:function(data){
 			that.setState({
 				depts:data
 			});
 		}
		});

    }

render(){
	return(
		<div>
		<div className="card">
			<div> <h2>All Departments</h2> <br /> </div>
			<div className="container">
		 <table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		        <th width="25%">Id</th>
		        <th>Name Of Dept</th>
		        <th>Id Of Dept</th>
		      </tr>
		    </thead>
		    <tbody style={{textAlign:'center'}}>
		    {this.state.depts.map(function(item, index){
		    	return(

        	     <tr key={index}>
			        <td>{item._id}</td>
			        <td>{item.nameOfDept}</td>
			        <td>{item.idOfDept}</td>
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

export default retriveAllDepts;