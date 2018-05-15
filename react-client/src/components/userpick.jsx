import React from 'react';


class Appoinment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[]
		}
	}

	componentDidMount(){
		var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/doctor/retrieve',
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
				<select name='selector'>
					{this.state.doctors.map(function(item){
						return (
								<option value={item._id}>{item.fullName}</option>
							)
					})}


				</select>
			</div>
			)
	}



}

export default Appoinment;