import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom';
import AddLabTechncians from './adminComponents/AddLabTechncians.jsx';
import Home from './components/Home.jsx'
import Home2 from './components/Home2.jsx'
import Navabar from './components/Navabar.jsx'
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
        <AddLabTechncians/>
       <Navabar />
      <Route exact path="/" render={()=><Home />}/>
      <Route exact path="/test" render={()=><Home2 />}/>
      </div>
    </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

