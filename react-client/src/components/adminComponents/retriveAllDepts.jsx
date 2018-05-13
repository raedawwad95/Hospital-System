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
		console.log('ho')
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
		 <table className="table table-bordered">
		    <thead>
		      <tr>
		        <th>Id</th>
		        <th>Name Of Dept</th>
		        <th>Id Of Dept</th>
		        <th>Doctors Id</th>
		      </tr>
		    </thead>
		    <tbody>
		    {this.state.depts.map(function(item){
		    	return(

        	     <tr>
			        <td>{item._id}</td>
			        <td>{item.nameOfDept}</td>
			        <td>{item.idOfDept}</td>
			        <td>{item.doctorsId}</td>
		         </tr>
		         )
            })}
		    </tbody>
         </table>
	    </div>
		)
	}

}

export default retriveAllDepts;