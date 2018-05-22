import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Create from './Create.jsx';
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
        <Route path='/create' component={Create} />
      </div>
    )
  }
}
export default Main;    