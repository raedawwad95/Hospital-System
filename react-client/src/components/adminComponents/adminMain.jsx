import React from 'react';
import AddLabTechncians from './AddLabTechncians.jsx';
import addDept from './addDept.jsx';
import AdminNavbar from './AdminNavbar.jsx'
import {browserHistory, Route, BrowserRouter as Router, Link} from 'react-router-dom';
class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <AdminNavbar/>
        <h1>Admin PAge </h1>

        <Route path="/admin/AddLabTechncians" component={AddLabTechncians} />
        <Route path="/admin/addDept" component={addDept} />  
      </div>
    )
  }
}
export default Admin;  
