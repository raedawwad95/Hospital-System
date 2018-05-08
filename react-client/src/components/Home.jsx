import React from 'react';
import ShowComments from './showcomments.jsx';
import AddItems from './AddItems.jsx';
import Comments from './comments.jsx';
import ItemDisplay from './ItemDisplay.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      arr:[]
    }
  }
  
  // componentDidMount() {
  //   var that = this;
  //   $.ajax({
  //     url: '/link',
  //     method: "GET"
  //   })
  //   .done(function(data) {
  //     console.log(data)
  //     that.setState({
  //       arr: data
  //     })
  //   })
  //   .fail(function (jqXHR, textStatus) {
  //     alert("no match found!");
  //   });
  // }

  render(){
    return(
      <div>
        <h1> Still nothing here yet!!</h1>
      </div>
    )
  }
}
export default Home;