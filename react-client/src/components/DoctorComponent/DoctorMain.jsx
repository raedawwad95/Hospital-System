import React from 'react';
import DoctorNavbar from './DoctorNavbar.jsx';
import DoctorHome from './DoctorHome.jsx';
import PatientDataAddRecord from './PatientDataAddRecord.jsx';
import UpdateDoctor from './UpdateDoctor.jsx';
import Appointment from './DoctorsAppointments.jsx';
import { browserHistory, Route, BrowserRouter as Router, Link } from 'react-router-dom';

class Doctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshed: false
    }
  }

  refreshComponents(value) {
    window.location.reload()
  }

  render() {
    return (
      <div>
      <DoctorNavbar refresh={this.refreshComponents.bind(this)}/>
      <br/>
        <Route exact path="/doctor" component={DoctorHome}/>
        <Route path="/doctor/patient" component={PatientDataAddRecord} />
        <Route path="/doctor/update" component={UpdateDoctor} />
        <Route path="/doctor/apppointment" component={Appointment} />
      </div>
    )
  }
}
export default Doctor;      