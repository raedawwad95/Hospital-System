import React from 'react';
import $ from 'jquery';
import { Table,TableBody,TableCell,TableHead,TableRow,Paper,withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

//this for Table
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


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
	const { classes } = this.props;
	var that = this;
	return (
		<div>
		<div className='card'>
		<div> <h2 style={{textAlign:'center'}}> All News </h2> <br /> </div> 
		<div className='container-fluid'>
		<Paper className={classes.root}>
		    <Table className={classes.table}>
		      <TableHead>
		      <TableRow>
		        <CustomTableCell>News Subject</CustomTableCell>
		        <CustomTableCell>News Text</CustomTableCell>
		        <CustomTableCell >Delete</CustomTableCell>
		      </TableRow>
		    </TableHead>
		    <TableBody>
		      {this.state.News.map((item, index) =>{
		        return (
		          <TableRow className={classes.row} key={index}>
		            <CustomTableCell component="th" scope="row">
		              {item.newsSubject}
		            </CustomTableCell>
		            <CustomTableCell>{item.newsText}</CustomTableCell>
		            <CustomTableCell><button onClick={that.deleteNewsClick} value={item._id} className="btn btn-danger">delete</button></CustomTableCell>
		          </TableRow>
		        );
		      })}
		        </TableBody>
		      </Table>
		    </Paper>
		    <br/>
		</div>
		</div>				
		</div>
	);
}
}
DeleteNews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteNews);

