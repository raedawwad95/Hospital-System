import React from 'react';
import $ from 'jquery'
class DoctorApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doc:[],
			app:[]
		}
	}

	componentDidMount(){
		var that=this;
		var doctorIdArr=[];
		var appArr=[];
		$.ajax({
			type:'get',
			url:'/Doctor/retrieve',
			success:function(data){
				for(var i=0;i<data.length;i++){
					doctorIdArr.push(data[i])
				}
			}
		})
				
		$.ajax({
			type:'get',
			url:'/app',
			success:function(data){
				for(var i=0;i<data.length;i++){
					appArr.push(data[i])
				}
			}
		})

			that.setState({		
				app:appArr,
				doc:doctorIdArr
			})

	}


	render(){
		console.log('aaaaaaaaaa ',this.state)

		return(
			<div>
			
			</div>
			)
	}
}

export default DoctorApp;