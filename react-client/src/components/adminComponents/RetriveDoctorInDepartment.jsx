import React from 'react';
import $ from 'jquery';
import { TextField, Grid,
		Button,CardActions,FormControl,InputLabel,Select,MenuItem,Input,FormHelperText} from 'material-ui';

class RetriveDoctorInDepartment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			departmentData:[],
			nameOfDep:'',
			depts:[]
		}
		this.onChange=this.onChange.bind(this);
		this.retriveData=this.retriveData.bind(this);
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
 			})
 		}
		});
    }
	onChange(e){
		this.setState({
			nameOfDep:e.target.value
		})
	}
	retriveData() {
    	var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/dept/'+that.state.nameOfDep,
 		success:function(data){
 			that.setState({
 				departmentData:data
 			});
 		}
		});
    }
render(){
	if(this.state.departmentData.length>0){
	return(
		<div>
		<div className="card">
		<div> <h2> Doctors In The Department</h2> <br /> </div> 
		<div className='container-fluid'>
		<Grid item xs={6} sm={3}>
			<FormControl >
	          <InputLabel>Department</InputLabel>
	          <Select
	            value={this.state.nameOfDep}
	            onChange={this.onChange}
	            input={<Input name="nameOfDep" />}
	          >
	            <MenuItem value="">
	              <em>None</em>
	            </MenuItem>
	            {this.state.depts.map(function(item, index){
					return(
						<MenuItem value={item.nameOfDept} key={index}>{item.nameOfDept}</MenuItem>
					)
				})}	
	          </Select>
	          <FormHelperText>Select Department</FormHelperText>
	        </FormControl>
		</Grid>
		<CardActions>
		    <Button variant="raised" color="primary" onClick={this.retriveData} >
	        	Retrive Data
	      	</Button>
		</CardActions>	
	    <h1 style={{textAlign:'center'}}>Department Data</h1>      	
		 <table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		        <th width="25%">Id</th>
		        <th>Name Of Dept</th>
		        <th>Id Of Dept</th>
		      </tr>
		    </thead>		    
		    <tbody style={{textAlign:'center'}}>
		    {this.state.departmentData.map(function(item, index){
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
         <br />
         <div className="card">
         <div className='container-fluid'>
          <h1 style={{textAlign:'center'}}>Doctors in the Department</h1>      	
		 <table className="table table-bordered">
		    <thead style={{textAlign:'center'}}>
		      <tr>
		        <th width='20%'>Id </th>
		        <th>User Name</th>
		        <th>Full Name</th>
		        <th>Hours Of Work</th>
		        <th>Spicility Status</th>
		      </tr>
		    </thead>		    
		    <tbody style={{textAlign:'center'}}>
		    {this.state.departmentData[0].doctorsId.map(function(item, index){
		    	return(
        	     <tr key= {index}>
			        <td>{item._id}</td>
			        <td>{item.userName}</td>
			        <td>{item.fullName}</td>
			        <td>{item.hoursOfWork}</td>
			        <td>{item.spicilityStatus}</td>
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
	}else{
			return(
		<div>
		<div className="card">
		<div> <h2> Doctors In The Department </h2> <br /> </div> 
		<div className='container-fluid'>
		<Grid item xs={6} sm={3}>
			<FormControl >
	          <InputLabel>Department</InputLabel>
	          <Select
	            value={this.state.nameOfDep}
	            onChange={this.onChange}
	            input={<Input name="nameOfDep" />}
	          >
	            <MenuItem value="">
	              <em>None</em>
	            </MenuItem>
	            {this.state.depts.map(function(item, index){
					return(
						<MenuItem value={item.nameOfDept} key={index}>{item.nameOfDept}</MenuItem>
					)
				})}	
	          </Select>
	          <FormHelperText>Select Department</FormHelperText>
	        </FormControl>
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
export default RetriveDoctorInDepartment;