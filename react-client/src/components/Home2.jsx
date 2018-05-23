import React from 'react';
import DoctorApp from './DoctorsAppointments.jsx'
class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      arr:[]
    }
  }
  render(){
    return(
      <div>
        <h1> Test routing </h1>
        <DoctorApp />
      </div>
    )
  }
}
export default Home2;