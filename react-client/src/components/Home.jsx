import React from 'react';
import Main from './mStyle.jsx';
import AddDepartment from './adminComponents/addDept.jsx';
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
        <h1> Still nothing here yet!!</h1>
        <AddDepartment />
      </div>
    )
  }
}
export default Home;