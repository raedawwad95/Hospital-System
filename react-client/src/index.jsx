import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, browserHistory} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home.jsx'
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
        <Navbar bsStyle='inverse' collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              Hospital Logo
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem eventKey={2} >
                <Link to="/test">test</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="DropList" id="dropdown">
                <MenuItem eventKey={3.1}><Link to="/test">test1</Link></MenuItem>
                <MenuItem eventKey={3.2}><Link to="/test">test2</Link></MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="/test">withLine</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/" render={()=><Home />}/>
      </div>
    </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));