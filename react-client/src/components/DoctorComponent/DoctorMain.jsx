import React from 'react';
import DoctorNavbar from './DoctorNavbar.jsx';
import DoctorHome from './DoctorHome.jsx';
import AddLabResult from '../LabsTechnciansComponents/AddLabResult.jsx';
import UpdateDoctor from './UpdateDoctor.jsx';
import { browserHistory, Route, BrowserRouter as Router, Link } from 'react-router-dom';
class Doctor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <DoctorNavbar/>
      <br/>
        <Route exact path="/doctor" component={DoctorHome} />
        <Route path="/doctor/patient" component={AddLabResult} />
        <Route path="/doctor/update" component={UpdateDoctor} />
      </div>
    )
  }
}
export default Doctor;      
