import React from 'react';


class DoctorAppointments extends React.Component{
	constructor(props){
		super(props);
		this.state={
			docId:[],
			doctorId:'',
			appointment:[]

		}
		this.handleDoctorChange=this.handleDoctorChange.bind(this);
		this.getTheApp=this.getTheApp.bind(this)

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



	render(){
		console.log(this.state.doctorId)
		console.log('hhhhhhhhhhh ',this.state.appointment)
		return(<div>
			<select name='doctor' onChange={this.handleDoctorChange}>
			<option value=''>chose a doctor</option>
			{this.state.docId.map(function(doc){
				return(
				<option value={doc._id}>{doc.fullName}</option>
						)
			})}


			</select>
			</div>
			)
	}

}

export default DoctorAppointments ;