import React from 'react';
import Navabar from './Navabar.jsx'
import Appoinment from './userpick.jsx'
import DoctorAppoinment from './DoctorAppoinment.jsx'
import Calender from './calender.jsx'
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
          <Appoinment />
       
  
        </div>
      </div>

    )
  }
}
export default Home;


   // <DoctorAppoinment />

