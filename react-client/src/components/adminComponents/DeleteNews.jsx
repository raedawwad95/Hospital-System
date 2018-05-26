import React from 'react';
import $ from 'jquery';



 class DeleteNews extends React.Component {
 	constructor(props){
 		super(props);
 		this.state={
 			News:[]
 		}
 		this.onChange=this.onChange.bind(this);
 		this.deleteNewsClick=this.deleteNewsClick.bind(this);
 		
 	}

 	onChange(e){
 		this.setState({
 		[e.target.name]:e.target.value
 		})
 	}

 	componentDidMount(){
 		var that=this;
 		$.ajax({
 			type:'GET',
 			url:'/news',
 			success:function(data){
 				that.setState({
 					News:data
 				})

 			}
 		})
 	}

 	deleteNewsClick(id){
 		var that=this;
 		var id = id.target.value
 		$.ajax({
 			type:"Delete",
 			url:'/news/'+id,
 			success:function(data){
 				alert('data deleted')
 				that.componentDidMount();
 			},
 			error:function(err){
 				console.log(err)
 			}
 		})
 	}


	render() {
		var that = this;
		return (
			<div>

			<div className='card'>
			<div> <h2> All News </h2> <br /> </div> 
			<div className='container-fluid'>
				<table className="table table-bordered">
				<thead style={{textAlign:'center'}}>
					  <tr>
					    <th>newsSubject</th>
					   	<th style={{width:'50%'}}>newsText</th>
					   	<th>Delete</th>
					  </tr>
				</thead>
				<tbody style={{textAlign:'center'}}>
				{ this.state.News.map(function(item, index){
					return(
						<tr key={index}>
					        <td>{item.newsSubject}</td>
					        <td>{item.newsText}</td>
					        <td> <button onClick={that.deleteNewsClick} value={item._id}>delete</button> </td>
					    </tr>

						)
					})}
					</tbody>
					</table>
					</div>
					</div>
				
			</div>
		);
	}
}


export  default  DeleteNews
