import React, { Component } from 'react';
import $ from 'jquery'
import PropTypes from 'prop-types';
import { Typography, Grid, Card, TextField,CardActions, CardContent, CardMedia,
		Button,withStyles,CircularProgress } from 'material-ui';
import moment from 'moment';

const styles = {
  card: {
  	width: '60%',
  	height:200,
  	paddingTop:5,
  },
  media: {
  	width: '40%',
    height: '40%',
  },
};


export class News extends Component {
	constructor(props){
		super(props);
		this.state={
		
			newsData:[],
			
			
		}
	}

	componentDidMount() {
    	var that=this;
    	$.ajax({
	    	type:'GET',
			dataType: "json",
	 		url: '/news',
	 		success:function(data){
	 			console.log("data Fetched",data)
	 			that.setState({
	 				newsData:data
	 			})
	 			
	 		}
		});
    }

	render() {
		const { classes } = this.props;
		return (
			<div>
       
      			{this.state.newsData.map(function(elem,index){
      				return(
      					<div>
      				<Card className={classes.card} key={index}>
      				<CardMedia
			          className={classes.media}
			          image={elem.Image}
			          
			        />
			        <CardContent>
			       
		          
		          <Typography  value={elem.newsSubject}>{elem.newsSubject}
		          </Typography>
		         

		          <Typography  value={elem.newsText}>{elem.newsText}
		          </Typography>
		         
		          <Typography value ={elem.createdAt}>{moment(elem.createdAt).fromNow()}
		          </Typography>


		       	  </CardContent>
      				</Card>
      				<br/>
      				</div>
      				)
      			})}
      
           </div>
		);
	}
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(News);




