import React from 'react';
import Navabar from './Navabar.jsx'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      arr:[]
    }
  }
  render(){
    return(
      <div>
        <Navabar />
        <div>
          <h1> User Home Components</h1> 
        </div>
      </div>

    )
  }
}
export default Home;



