import React from 'react';
import LabsNavbar from './LabsNavbar.jsx';
import LabHome from './LabHome.jsx';
import AddLabResult from './AddLabResult.jsx';
import UpdateLabTechncians from './UpdateLabTechncians.jsx'
import { browserHistory, Route, BrowserRouter as Router, Link } from 'react-router-dom';

class Labs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <LabsNavbar/>
      <br/>
        <Route exact path="/labs" component={LabHome} />
        <Route path='/labs/AddLabResult' component={AddLabResult} />
        <Route path="/labs/update" component={UpdateLabTechncians} />
      </div>
    )
  }
}
export default Labs;      
