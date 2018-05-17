import React from 'react';


class DoctorAppoinment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			appoint:[]
		}
	}

	componentDidMount(){
		var that=this;
		$.ajax({
			type:'get',
			url:'/app',
			datatype:'json',
			success:function(data){
				that.setState({
					appoint:data
				})
			}
		})
	}




	render(){
		console.log('this.state.appoint ',this.state.appoint)
		return (
			<div>

			<h1>doctor appoinment component</h1>
			
				{this.state.appoint.map(function(item){
					return(
						<h1>{item.day}</h1>
						)
					
				})}				

			

		
			</div>
			)
	}

}

export default DoctorAppoinment;