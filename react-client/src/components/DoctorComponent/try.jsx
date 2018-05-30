import React from 'react';

class Try extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}

	componentDidMount(){
		console.log('this.props.msg try ',this.props.msg)
	}

	render(){

		return(
			<h1>
			you have message
			</h1>
			)
	}
}

export default Try;