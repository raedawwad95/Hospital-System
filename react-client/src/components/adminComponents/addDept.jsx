import React from 'react';
import $ from 'jquery';
import {Button} from 'react-bootstrap'
class AddDepartment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			deptName:'',
			deptId:''
		}
		this.handelChange=this.handelChange.bind(this);
		this.add=this.add.bind(this);
	}

	handelChange(e){
		this.setState({
			 [e.target.name]: e.target.value 
		})
	}

	add(){
		var that=this;
		var obj={
			nameOfDept:that.state.deptName,
			idOfDept:that.state.deptId
		}
		$.ajax({
			type:'POST',
			url:'/dept',
			data:obj,
			dataType: "json",
			success:function(data){
				console.log('good')
			},
			failure: function(errMsg) {
            console.log('error');
            }
		})
	}

	render(){
		return(
			<div>
				<input type='text' name='deptName' value={this.state.deptName} onChange={this.handelChange} placeholder='Department name' />
				<input type='text' name='deptId'  value={this.state.deptId} onChange={this.handelChange} placeholder='Department id'/>
				<Button onClick={this.add}> ADD </Button>

			</div>
			)
	}
}

export default AddDepartment;