import React from 'react';
import PatientDataAddRecord from '../DoctorComponent/PatientDataAddRecord.jsx';
import addDept from './addDept.jsx';
import AdminNavbar from './AdminNavbar.jsx';
import AdminHome from './AdminHome.jsx';
import addDoctorToDepartment from './addDoctorToDepartment.jsx';
import AddDoctor from './AddDoctor.jsx';
import retriveAllDepts from './retriveAllDepts.jsx';
import retriveAllDoctor from './retriveAllDoctor.jsx';
import retriveLabResults from './retriveLabResults.jsx';
import retriveLabTech from './retriveLabTech.jsx';
import retrivePatient from './retrivePatient.jsx';
import { browserHistory, Route, BrowserRouter as Router, Link } from 'react-router-dom';
class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <AdminNavbar/>
      <br/>
        <Route exact path="/admin" component={AdminHome} />
        <Route path="/admin/AddLabTechncians" component={PatientDataAddRecord} />
        <Route path="/admin/addDept" component={addDept} />  
        <Route path="/admin/addDoctorToDepartment" component={addDoctorToDepartment} />  
        <Route path="/admin/AddDoctor" component={AddDoctor} />
        <Route path="/admin/retriveAllDepts" component={retriveAllDepts} />
        <Route path="/admin/retriveAllDoctor" component={retriveAllDoctor} />
        <Route path="/admin/retriveLabResults" component={retriveLabResults} />
        <Route path="/admin/retriveLabTech" component={retriveLabTech} />
        <Route path='/admin/retrivePatient' component={retrivePatient} />
      </div>
    )
  }
}
export default Admin;  
