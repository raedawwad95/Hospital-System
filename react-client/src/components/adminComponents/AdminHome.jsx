import React from 'react';
import RetriveEmergency from './RetriveEmergency.jsx';
 import Statistics from './Statistics.jsx'

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Admin Home Page</h1>
        <h3> TODO: </h3>
        <p> add notification here </p>
        <RetriveEmergency />
        <Statistics/>
      </div>
    )
  }
}
export default AdminHome;  
