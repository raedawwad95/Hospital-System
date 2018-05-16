import React from 'react';
import $ from 'jquery';
import {Button} from 'react-bootstrap';

class AddDocToComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			depts:[],
			docId:''
		}
		this.handleChange=this.handleChange.bind(this);
		this.add=this.add.bind(this)
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

    handleChange(e){
    	this.setState({
    		docId:e.target.value
    	})
    	
    }

    add(){
    	var that=this;
    	var idOfDept=$('select[name=selector]').val();
    	var obj={
    		idOfDept:idOfDept,
    		docId:that.state.docId
    	}
    	$.ajax({
    		type:'PUT',
    		url:'/dept',
    		data:obj,
    		success:function(date){
    			console.log('done');
    		}
    	})
    	
    }

	render(){

		return(
		<div>
			<select name='selector'>
				{this.state.depts.map(function(item){
					return(
						<option value={item.idOfDept}>{item.nameOfDept}</option>
					)
				})}			
			</select>
			<input type='text' value={this.state.docId} onChange={this.handleChange} placeholder='add doctor'/>
			<Button onClick={this.add}> Add Doc</Button>
		</div>
			)
	}

}

export default AddDocToComponent;