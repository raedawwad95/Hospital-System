import React from 'react';
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
        <h1> Doctors Page!!</h1>
      </div>
    )
  }
}
export default Home;