import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});



class ChooseDoctor extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[]
			}
	}


	componentDidMount(){
		console.log('ChooseDoctor')
		var arr=[];
		var that=this;
		$.ajax({
			type:'get',
			url:'/Doctor/retrieve',
			success:function(data){
				for(var i=0;i<data.length;i++){
					arr.push(data[i])
				}
				that.setState({
					doctors:arr
				})
			}
		})
	}

	
	render(){
		const classes =this.props

		console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmm ',this.state)
		return(
			<div>
				 <InputLabel >doctor</InputLabel>
				 <Select
        	    	value={this.state.age}
        	    	onChange={this.handleChange}
        	    	inputProps={{
        	    	name: 'age',
                	id: 'age-simple',
            		}}
          		>
          		<MenuItem value="ggg">
              	<em>None</em>
            	</MenuItem>
            	{this.state.doctors.map(function(doc){
            		return(
            			<MenuItem value={doc._id}>
            			{doc.fullName}
            			</MenuItem>
            			)
            	})}
           		</Select>
			</div>
			)	
	}
}


ChooseDoctor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChooseDoctor);
