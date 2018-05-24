import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Create from './Create.jsx';
import Appointment from './PationtAppoinment.jsx';
import { browserHistory, Route, BrowserRouter as Router, Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Navbar/>
      <br/>
        <Route exact path="/" component={Home} />
        <Route path="/user/create" component={Create} />
        <Route path="/user/appointment" component={Appointment} />

      </div>
    )
  }
}
export default Main;    