import React from 'react';
import Appointment from './DoctorsAppointments.jsx';
class DoctorHome extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    logged : false,
    update: false
  }
}
componentDidMount() {
  var that = this
  $.ajax({
    url:'/Doctor/isLogin',
    type:'GET',
    success:function(data){
      that.setState({
        logged: true
      })
    },
    error:function(err){
      console.log(err);
    }
  });
  if (this.props.update){
    console.log('test55')
    this.setState({
      update: true
    })
  }
}

render() {
  if (!this.state.logged) {
    return (
      <div>
        <h2> Please Login </h2>
      </div>
    )
  }
  else {
    return (
      <div>
        <Appointment />
      </div>
    ) 
  }
}
}
export default DoctorHome;  
