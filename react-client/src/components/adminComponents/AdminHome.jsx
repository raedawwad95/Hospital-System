import React from 'react';
import RetriveEmergency from './RetriveEmergency.jsx';
 import Statistics from './Statistics.jsx'

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
  this.state={
      auth: false
    }
  }
  componentDidMount() {
    var that = this
    $.ajax({
      url:'/itDep/isLogin',
      type:'GET',
      success:function(data){
        that.setState({
          auth: true
        })
      },
      error:function(err){
        console.log(err);
      }
    });

  }
  render() {
    const { auth } = this.state;
    return (
      <div>
      {auth &&(
        <div>
          <h1>Admin Home Page</h1>
          <h3> TODO: </h3>
          <p> add notification here </p>
          <RetriveEmergency />
        </div>
        )}
      {!auth &&(
        <div>
        <h1>Admin Home Page</h1>
        <h3> TODO: </h3>
        <p> add notification here </p>
        <RetriveEmergency />
        <Statistics/>
        </div>
        )}
      </div>
    )
  }
}
export default AdminHome;  
