import React from 'react';
import $ from 'jquery';
import { TextField, Grid,
    Button,CardActions} from 'material-ui';
import Modal from 'react-modal';

const customStyles1 = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : '10%',
    bottom                : '10%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class UserProfile extends React.Component{
constructor(props){
  super(props);
  this.state={
    userInfo:[],
    modalIsOpenImageMedical: false, 
    modalIsOpenImageResult:false,
    imageMedical:'',
    imageResult:''
  }
    this.openModalImageMedical = this.openModalImageMedical.bind(this);
    this.closeModalImageMedical = this.closeModalImageMedical.bind(this);
    this.openModalImageResult = this.openModalImageResult.bind(this);
    this.closeModalImageResult = this.closeModalImageResult.bind(this);
}
componentDidMount() {
  var that=this;
  $.ajax({
    type:'GET',
    dataType: "json",
    url: '/api/userController/retrive/user',
    success:function(data){
      that.setState({
      userInfo:data
      });
    }
  });
}
closeModalImageMedical() {
  this.setState({
    modalIsOpenImageMedical: false
  });
}
openModalImageMedical(e) {
  this.setState({
    modalIsOpenImageMedical: true,
    imageMedical:e.target.value
  });
}
closeModalImageResult(){
  this.setState({
    modalIsOpenImageResult: false
  });
}
openModalImageResult(e) {
  this.setState({
    modalIsOpenImageResult: true,
    imageResult:e.target.value
  });
}
render(){
  var that =this;
if(this.state.userInfo.length>0){
return(
  
  <div>
  <div className="row " >
  <div className="col-md-3 "  >
  <div> <h2>  My Profile </h2> <br /> </div> 
  <div className='container-fluid'>     
  {this.state.userInfo.map(function(item, index){
    return(
      <div>
      <img  src={item.personalImgUrl}/>
      <h2 >Name:</h2>
      <p > {item.FullName}</p>
      <h2 >email:</h2>
      <p > {item.email}</p>
      <h2>phoneNumber:</h2> 
      <p>{item.phone}</p>
      </div>
         )
        })}
     </div>
     </div>
     </div>
     <br />
     <div className="card">
     <div className='container-fluid'>
     <h1 style={{textAlign:'center'}}>User Lab Result</h1>       
   <table className="table table-bordered">
      <thead style={{textAlign:'center'}}>
        <tr>
          <th width='20%'>Id </th>
          <th>Lab Technician Name</th>
          <th>Medical Examination Time</th>
          <th>Result Entry Time</th>
          <th>Description</th>
          <th>Image Result</th>
        </tr>
      </thead>        
      <tbody style={{textAlign:'center'}}>
      {this.state.userInfo[0].labResults.map(function(item, index){
        return(
             <tr key= {index}>
            <td>{item._id}</td>
            <td>{item.labTechnicianId.fullName}</td>
            <td>{item.medicalExaminationTime}</td>
            <td>{item.resultEntryTime}</td>
            <td>{item.description}</td>
           <td><button style={{'background-color': 'white'}} value ={item.imageOfResult} onClick={that.openModalImageResult}>{item.imageOfResult}</button></td>
           </tr>
           )
          })}
      </tbody>
       </table>
       </div>
    </div>
     <Modal
        isOpen={this.state.modalIsOpenImageResult}
        contentLabel="Add New Record"
        style={customStyles1}
      >
  <div className="card">
  <div className='container-fluid'>

    <Grid container spacing={24}>
    <Grid item xs={24} sm={12}>
        <img  style={{textAlign:'center'}} src ={this.state.imageResult}></img>
  <CardActions>
      <Button variant="raised" color="primary" onClick={this.closeModalImageResult} >
          Close
        </Button>
  </CardActions>  
  </Grid>
  </Grid>
  </div>
  </div>
      </Modal>
    <br />
    <div className="card">
    <div className='container-fluid'>
        <h1 style={{textAlign:'center'}}>User Medical Records</h1>        
   <table className="table table-bordered">
      <thead style={{textAlign:'center'}}>
        <tr>
          <th width='20%'>Id </th>
          <th>Doctor Name</th>
          <th>Description</th>
          <th>Image Medical</th>
        </tr>
      </thead>        
      <tbody style={{textAlign:'center'}}>
      {this.state.userInfo[0].medicalRecords.map(function(item, index){
        return(
             <tr key={index}>
            <td>{item._id}</td>
            <td>{item.doctorId.fullName}</td>
            <td>{item.description}</td>
            <td value ={item.image}><button style={{'background-color': 'white'}} value ={item.image} onClick={that.openModalImageMedical}>{item.image}</button></td>
           </tr>
           )
          })}
      </tbody>
       </table>
    </div>
    </div>
     <Modal
        isOpen={this.state.modalIsOpenImageMedical}
        contentLabel="Add New Record"
        style={customStyles1}
      >
  <div className="card">
  <div className='container-fluid'>

    <Grid container spacing={24}>
    <Grid item xs={24} sm={12}>
        <img  style={{textAlign:'center'}} src ={this.state.imageMedical}></img>
  <CardActions>
      <Button variant="raised" color="primary" onClick={this.closeModalImageMedical} >
          Close
        </Button>
  </CardActions>  
  </Grid>
  </Grid>
  </div>
  </div>
      </Modal>
    <br />
    </div>
    
  )
}else{
    return(
  <div>
  </div>
    )

}

}
}
export default UserProfile;