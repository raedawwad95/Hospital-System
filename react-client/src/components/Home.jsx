import React from 'react';
import Navabar from './Navabar.jsx'
import UserAppoinment from './UserpickApp.jsx'
import DoctorAppointments from './DoctorPickApp.jsx'
import News from './News.jsx'

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
          <br />
          <br />
          <br />
          <br />
        </div>
          <News/>
      </div>

    )
  }
}
export default Home;



