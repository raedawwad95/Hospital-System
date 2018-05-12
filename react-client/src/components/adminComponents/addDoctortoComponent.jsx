import React from 'react';
import $ from 'jquery';


class AddDocToComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			depts:[],
			doc:''
		}
		this.handleChange=this.handleChange.bind(this);
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
    		doc:e.target.value
    	})
    	
    }

	render(){

		return(
			<div>
			<select>
			{this.state.depts.map(function(item){
				return(
					<option value="{item.nameOfDept}">{item.nameOfDept}</option>
					)
			})}			
			</select>
			<input type='text' value={this.state.doc} onChange={this.handleChange}/>
			<
			</div>
			)
	}

}

export default AddDocToComponent;