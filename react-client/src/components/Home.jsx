import React from 'react';
import Main from './mStyle.jsx';
import AddDepartment from './adminComponents/addDept.jsx';
import AddDocToComponent from './adminComponents/addDoctortoComponent.jsx'
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
        <AddDocToComponent  />
      </div>
    )
  }
}
export default Home;