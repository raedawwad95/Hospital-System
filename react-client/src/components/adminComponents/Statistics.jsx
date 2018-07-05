import React from 'react';
import $ from 'jquery';
import BarChart from 'react-bar-chart';
class Statistics extends React.Component {
constructor(props){
	super(props);
	this.state={
		doctors:[],
		labTechs:[],
		userData:[],
		depts:[],
		width:500,

	}
}
	componentWillMount() {
	var that=this;
	$.ajax({
  	type:'GET',
	dataType: "json",
		url: '/Doctor/retrieve',
		success:function(data){
			that.setState({
				doctors:data
			})
		}
})
var that=this;
	$.ajax({
	type:'GET',
dataType: "json",
	url: '/labTech',
	success:function(data){
		that.setState({
			labTechs:data
		})
	}
})
var that=this;
	$.ajax({
	type:'GET',
dataType: "json",
	url: '/api/userController/retrive/allPatient',
	success:function(data){
		that.setState({
			userData:data
		});
	}
})
var that=this;
	$.ajax({
	type:'GET',
dataType: "json",
	url: '/dept',
	success:function(data){
		that.setState({
			depts:data
		});
	}
});
}
componentDidMount(){
	window.onresize = () => {
   this.setState({width: this.refs.root.offsetWidth}); 
  };
}
render() {
	const data = [
		{text:'Doctor',value:this.state.doctors.length},
		{text:'labTechs',value:this.state.labTechs.length},
		{text:'Patient',value:this.state.userData.length},
		{text:'Departments',value:this.state.depts.length}
		]
	const margin = {top: 20, right: 20, bottom: 30, left: 40};
	    if (this.state.doctors.length === 0){
  	return (
		<h1> test </h1>
  	)
  }
  return (
      <div ref='root'>
          <div style={{width: '50%'}}> 
              <BarChart 
                width={this.state.width}
                height={500}
            	 margin={margin}
               data= {data}
             />
          </div>
      </div>
  );
}
}
export default Statistics;

