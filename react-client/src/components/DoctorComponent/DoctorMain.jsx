import React from 'react';
import DoctorNavbar from './DoctorNavbar.jsx';
import DoctorHome from './DoctorHome.jsx';
import PatientDataAddRecord from './PatientDataAddRecord.jsx';

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
        <Route path="/doctor/patient" component={PatientDataAddRecord} />
        <Route path="/doctor/records" component={DoctorHome} />
      </div>
    )
  }
}
export default Doctor;  
