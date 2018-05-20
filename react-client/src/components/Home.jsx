import React from 'react';
import Navabar from './Navabar.jsx'
import UserAppoinment from './UserpickApp.jsx'
import DoctorAppointments from './DoctorPickApp.jsx'
import DeleteLabTech from './adminComponents/DeleteLabTech.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      arr:[]
    }
  }
  render(){
    return(
      <div>
        <Navabar />
        <div>
          <h1> User Home Components</h1> 

          <DoctorAppointments/>
          <br />
          <br />
          <br />
          <br />
          <UserAppoinment />
          <DeleteLabTech/>
        </div>
      </div>

    )
  }
}
export default Home;


   // <DoctorAppoinment />

