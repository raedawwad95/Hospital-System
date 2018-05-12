import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar ,Nav,NavItem} from 'react-bootstrap'
class Main extends React.Component {
	constructor(props){
		super(props)
	}


	render(){
		return(
			<div>
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
					Hospital
					</Navbar.Brand>
				</Navbar.Header>
				
				<Nav>
					<NavItem eventKey={1} >
					h1
					</NavItem>
				</Nav>
			</Navbar>
			</div>
			)
	}
}

export default Main;