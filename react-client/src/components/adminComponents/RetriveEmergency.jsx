import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { withStyles, InputAdornment, Paper, Grid, CardHeader,
		Button, Card, CardActions, CardContent,
		Table, TableBody, TableCell, TableHead, TableRow } from 'material-ui';
import moment from 'moment';

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

class RetriveEmergency extends React.Component{
	constructor(props){
		super(props);
		this.state={
			emergency:[]
		}
	}

	componentDidMount() {
    	var that=this;
    	$.ajax({
	    	type:'GET',
			dataType: "json",
	 		url: '/emergency',
	 		success:function(data){
	 			that.setState({
	 				emergency:data
	 			});
    			console.log(that.state.emergency);
	 		}
		});
    }

render(){
	const { classes } = this.props;
	if (this.state.emergency.length === 0) {
		return (
			<h3> No emergency calls </h3>
		)
	}
	return(
		<Paper className={classes.root}>
	      <Table className={classes.table}>
	        <TableHead>
	          <TableRow>
	            <CustomTableCell>Name</CustomTableCell>
	            <CustomTableCell numeric>Phone</CustomTableCell>
	            <CustomTableCell numeric>Long</CustomTableCell>
	            <CustomTableCell numeric>Lat</CustomTableCell>
	            <CustomTableCell>created At</CustomTableCell>
	            
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {this.state.emergency.map(n => {
	            return (
	              <TableRow className={classes.row} key={n.id}>
	                <CustomTableCell component="th" scope="row">
	                  {n.user.FullName}
	                </CustomTableCell>
	                <CustomTableCell numeric>{n.user.phone}</CustomTableCell>
	                <CustomTableCell numeric>{n.longitude}</CustomTableCell>
	                <CustomTableCell numeric>{n.latitude}</CustomTableCell>
	                <CustomTableCell>{moment(n.createdAt).calendar()}</CustomTableCell>
	              </TableRow>
	            );
	          })}
	        </TableBody>
	      </Table>
	    </Paper>
		)
	}

}

RetriveEmergency.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RetriveEmergency);