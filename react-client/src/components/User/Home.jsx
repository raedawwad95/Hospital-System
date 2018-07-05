import React from 'react';
import News from './News.jsx'

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
      <h1> Last NEWS about hospital </h1>
      <br />
      <News/>
    </div>
  )
}
}
export default Home;
