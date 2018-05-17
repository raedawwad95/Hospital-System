import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {browserHistory, Route, BrowserRouter as Router} from 'react-router-dom';
import Admin from './components/adminComponents/adminMain.jsx';
import Doctor from './components/DoctorComponent/DoctorMain.jsx';
import Labs from './components/LabsTechnciansComponents/LabsMain.jsx'
import Home from './components/Home.jsx';
import Home2 from './components/Home2.jsx';
import Navabar from './components/Navabar.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render () {
    return (
    <Router history={browserHistory}>
      <div className="container-fluid">

      <Route exact path="/" render={()=><Home />}/>
      <Route path="/test" render={()=><Home2 />}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/doctor" component={Doctor}/>
      <Route path="/labs" component={Labs}/>
      </div>
    </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

