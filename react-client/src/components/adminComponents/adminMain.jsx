import React from 'react';
import AddLabTechncians from './AddLabTechncians.jsx';
import addDept from './addDept.jsx';
import AdminNavbar from './AdminNavbar.jsx';
import AdminHome from './AdminHome.jsx';
import addDoctorToDepartment from './addDoctorToDepartment.jsx';
import AddDoctor from './AddDoctor.jsx';
import retriveAllDepts from './retriveAllDepts.jsx';
import retriveAllDoctor from './retriveAllDoctor.jsx';
import retriveLabResults from './retriveLabResults.jsx';
import retriveLabTech from './retriveLabTech.jsx';
import RetriveAllPatient from './RetriveAllPatient.jsx';
import retrivePatient from './retrivePatient.jsx';
import RetriveDoctorInDepartment from './RetriveDoctorInDepartment.jsx';
import addNews from './addNews.jsx';
import DeleteNews from './DeleteNews.jsx';
import RetriveEmergency from './RetriveEmergency.jsx';
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
        <Route path="/admin/AddLabTechncians" component={AddLabTechncians} />
        <Route path="/admin/addDept" component={addDept} />  
        <Route path="/admin/addDoctorToDepartment" component={addDoctorToDepartment} />  
        <Route path="/admin/AddDoctor" component={AddDoctor} />
        <Route path="/admin/retriveAllDepts" component={retriveAllDepts} />
        <Route path="/admin/retriveAllDoctor" component={retriveAllDoctor} />
        <Route path="/admin/retriveLabResults" component={retriveLabResults} />
        <Route path="/admin/retriveLabTech" component={retriveLabTech} />
        <Route path='/admin/retrivePatient' component={retrivePatient} />
        <Route path='/admin/RetriveAllPatient' component={RetriveAllPatient} />
        <Route path='/admin/RetriveDoctorInDepartment' component={RetriveDoctorInDepartment} />
        <Route path='/admin/addNews' component={addNews} />
        <Route path='/admin/DeleteNews' component={DeleteNews} />
        <Route path='/admin/RetriveEmergency' component={RetriveEmergency} />
      </div>
    )
  }
}
export default Admin;  
