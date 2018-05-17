import React from 'react';
import LabsNavbar from './LabsNavbar.jsx';
import LabHome from './LabHome.jsx';
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
        <Route exact path="/Lab" component={LabHome} />
        <Route path="/Lab/update" component={LabHome} />
      </div>
    )
  }
}
export default Labs;      
