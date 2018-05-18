import React from 'react';
import Example from './try.jsx';
import DoctorAppoinment from './DoctorAppoinment.jsx'

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      arr:[]
    }
  }
  render(){
    return(
      <div>
        <h1> Test routing </h1>
          <DoctorAppoinment />

      </div>
    )
  }
}
export default Home2;