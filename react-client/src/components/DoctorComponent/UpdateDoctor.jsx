import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { withStyles, TextField, Paper, Grid, FormControl,
		Button, Card, CardActions, CardContent, CardHeader,
		InputLabel, Input, InputAdornment, IconButton  } from '@material-ui/core';
import classNames from 'classnames';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
  paper: {
	padding: theme.spacing.unit * 2,
	textAlign: 'center',
	color: theme.palette.text.secondary,
	  },
	  margin: {
	margin: theme.spacing.unit,
	  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  card: {
    minWidth: 275,
  },

});

class UpdateDoctor extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userName:'',
			password:'',
		}
		this.updateDoctor=this.updateDoctor.bind(this);
		this.onChange=this.onChange.bind(this);
		this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
		this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
	}

	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	updateDoctor(){
		var that =this;
		$.ajax({
			url:'/Doctor/update',
			type:'PUT',
			data:that.state,
			success:function(data){
				console.log(data);
			},
			error:function(err){
				console.log(err);
			}
		});
	}

	componentDidMount() {
		var that =this;
		$.ajax({
			url:'/Doctor/getOne',
			type:'GET',
			success:function(data){
				that.setState({
					userName: data.userName
				})
			},
			error:function(err){
				console.log(err);
			}
		});
	}

	handleMouseDownPassword(event) {
      event.preventDefault();
    };

    handleClickShowPassword() {
      this.setState({ 
      	showPassword: !this.state.showPassword 
      });
    };


	render(){
		const { classes } = this.props;
		return(
			<div>
				<Card className={classes.card}>
				<CardHeader
			        title="Change password"
			      />
					<CardContent>
						<Grid container spacing={24}>
							<Grid item xs={6} sm={3}></Grid>
							<Grid item xs={6} sm={3}>
								<FormControl className={classes.formControl} disabled>
						          <InputLabel htmlFor="name-disabled">UserName</InputLabel>
						          <Input id="name-disabled" value={this.state.userName} />
						        </FormControl>
							</Grid> 
							<Grid item xs={6} sm={3}>
								<FormControl className={classNames(classes.margin, classes.textField)}>
				                  <InputLabel htmlFor="adornment-password">Password</InputLabel>
				                  <Input
				                    id="adornment-password"
				                    type={this.state.showPassword ? 'text' : 'password'}
				                    value={this.state.password}
				                    name="password"
				                    onChange={this.onChange}
				                    endAdornment={
				                      <InputAdornment position="end">
				                        <IconButton
				                          aria-label="Toggle password visibility"
				                          onClick={this.handleClickShowPassword}
				                          onMouseDown={this.handleMouseDownPassword}
				                        >
				                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
				                        </IconButton>
				                      </InputAdornment>
				                    }
				                  />
				                </FormControl>
							</Grid>
							<CardActions>
								<Button variant="raised" color="primary" className={classes.button} onClick={this.updateDoctor} >
						        	Submit
						      	</Button>
							</CardActions>
						</Grid>
					</CardContent>
				</Card>
			</div>
		)
	}
}

UpdateDoctor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateDoctor);