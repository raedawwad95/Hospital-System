import React from 'react';
import AddLabTechncians from './AddLabTechncians.jsx';
import addDept from './addDept.jsx';
import AdminNavbar from './AdminNavbar.jsx';
import AdminHome from './AdminHome.jsx';
import addDoctorToDepartment from './addDoctorToDepartment.jsx';
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
      </div>
    )
  }
}
export default Admin;  
