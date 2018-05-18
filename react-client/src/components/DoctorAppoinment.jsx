import React from 'react';


class DoctorAppoinment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			appoint:[],
			docApp:[]
		}
		this.show=this.show.bind(this)
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

	show(){
		var today=new Date;
		var arr=[];
		 console.log('this.state.appoint ',this.state.appoint)
		for(var i=0;i<this.state.appoint.length;i++){
			var x=new Date(this.state.appoint[i].day)
			console.log(x)
			if(today<x){
				this.state.docApp.push(x)

			}
		}
		this.setState({
			docApp:arr
		})


		console.log('here ',this.state.docApp)
	}




	render(){
		console.log('this.state.appoint ',this.state.appoint)
		return (
			<div>

			<h1>doctor appoinment component</h1>
			
			<button onClick={this.show}> SHOW </button>
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