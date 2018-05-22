import React from 'react';


class DoctorAppointments extends React.Component{
	constructor(props){
		super(props);
		this.state={
			docId:[],
			doctorId:'',
			appointment:[],
			thisMonthApp:[],
			todayApp:[],
			show:true
		}
		this.handleDoctorChange=this.handleDoctorChange.bind(this);
		this.getTheApp=this.getTheApp.bind(this)
		this.show=this.show.bind(this);

	}

		componentDidMount(){
		var that=this;
		var arr=[]
		$.ajax({
			type:'get',
			url:'/Doctor/retrieve',
			success:function(data){
				for(var i=0;i<data.length;i++){
					arr.push(data[i]._id);
				}
				that.setState({
					docId:data
				})	
			}
		})

	}

	handleDoctorChange(e){
		this.setState({
			doctorId:e.target.value
		})
		this.getTheApp()
	}

	getTheApp(){
		var that=this;
		var arr=[];
		$.ajax({
			type:'get',
			url:'/app',
			success:function(data){
				console.log('that.state.doctorId ',that.state.doctorId)
				console.log('data[i].doctorId',data[0].doctorId)
				for(var i=0;i<data.length;i++){
					if(that.state.doctorId==data[i].doctorId._id){
						arr.push(data[i])
						console.log('arr',arr)
					}
				}	
				that.setState({
					appointment:arr
				})
				console.log('that.state.appointment ',that.state.appointment);			
			}
		})

	}

	show(){
		var arr=this.state.appointment;
		var today=new Date();
		var curentHour=today.getHours()
		var curentMonth=today.getMonth()+1
		var curentDay=today.getDate();
		var arrd=[];
		var app=this.state.appointment;
		for(var i=0;i<app.length;i++){
			if(curentMonth===app[i].month){
				if(curentDay===app[i]){
				arrd.push(app[i])
				}else{
				arr.push(app[i])
				}

			}

		}
		this.setState({
			thisMonthApp:arr,
			todayApp:arrd
		})

		//alert(this.state.thisMonthApp)

	}


	render(){

		return(<div>
			<select name='doctor' onChange={this.handleDoctorChange}>
			<option value=''>chose a doctor</option>
			{this.state.docId.map(function(doc){
				return(
				<option value={doc._id}>{doc.fullName}</option>
						)
			})}
			</select>
			<button onClick={this.show}>show</button>
			{this.state.show&&(<div>
				{this.state.thisMonthApp.map(function(app){
					return(
						<h4>{app.month}/{app.day} at {app.hour} </h4>

						)
					console.log('lllllllllllllllllllll ',app)
				})}
				</div>
				)}
			</div>
			)
	}

}

export default DoctorAppointments ;