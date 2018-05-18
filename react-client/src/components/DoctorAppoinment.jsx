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

		console.log(this.state.appoint)
	}

	show(){

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

		console.log('asdasdasdasd ',this.state.appoint)

		var today=new Date;
		var arr=[];
		for(var i=0;i<this.state.appoint.length;i++){
			var x=new Date(this.state.appoint[i].day)
			console.log('today ',today)
			console.log('this.state.appoint[i].day ',this.state.appoint[i])
			if(today<x){
				this.state.docApp.push(x)

			}
		}
		this.setState({
			docApp:arr
		})


	}




	render(){
		console.log('this.state.docApp ',this.state.docApp)
		return (
			<div>

			<h1>doctor appoinment component</h1>
			
			<button onClick={this.show}> SHOW </button>
				{this.state.docApp.map(function(item){
					return(
						<h1>{item.day}</h1>
						)
					
				})}				

			

		
			</div>
			)
	}

}

export default DoctorAppoinment;