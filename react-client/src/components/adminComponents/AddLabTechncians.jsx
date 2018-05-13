import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { withStyles, MenuItem, TextField, Input, InputLabel, InputAdornment,
		FormControl, FormHelperText, IconButton, Paper, Grid,
		Button  } from 'material-ui';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';
import { FormGroup, ControlLabel } from 'react-bootstrap';

	const styles = theme => ({
	  container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	  textField: {
	    width: 200,
	  },
	  menu: {
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
  	  input: {
	    display: 'none',
	  },
	});

class AddLabTechncians extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			fullName:'',
			id:'',
			imageOfId:'',
			workHour:'',
			personalImgUrl:'',
			gender:'',
			showPassword: false,
		}
		this.onChange =this.onChange.bind(this);
		this.AddLabTechnciansClick=this.AddLabTechnciansClick.bind(this);
		this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
		this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
	}

	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
			
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

	AddLabTechnciansClick(){
		console.log(this.state)
		var that =this;
		$.ajax({
			type:'POST',
			url:'/labTech',
			data:that.state,
			success:function(data){
				console.log(data)
			},
			error:function(err){
				console.log(err)
				}
		})
	}

    onImageChange(e){
      var imgReader = new FileReader();
      var img = e.target.files[0];
      var that = this;
      var imgCode = ''
      imgReader.onload = function(upload) {
        imgCode = upload.target.result
        imgCode = imgCode.slice(22)
        $.ajax({
          url: `https://api.imgur.com/3/image`,
          method: 'POST',
          headers: {"Authorization": "Client-ID bb8a64e82b834b5"},
          data:imgCode
        })
        .done (function (data) {
          that.setState({
            personalImgUrl: data.data.link
          });
        })
        .fail(function( jqXHR, textStatus ) {
          alert("item not found, textStatus");
        });
      };
      imgReader.readAsDataURL(img)
      console.log(this.state);
    }

	render(){
		const { classes } = this.props;
		return(
			<div>
			<Grid container spacing={24}>
				<Grid item xs={6} sm={3}>
					<TextField
			          required
			          id="username"
			          label="UserName"
			          placeholder="UserName"
			          defaultValue="Enter userName"
			          className={classes.textField}
			          margin="normal"
			          value={this.state.username}
			          name="username"
	          		  onChange={this.onChange}
			        />
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
		        <Grid item xs={6} sm={3}>
					<TextField
			          required
			          id="fullName"
			          label="fullName"
			          placeholder="fullName"
			          defaultValue="Full name"
			          className={classes.textField}
			          margin="normal"
			          value={this.state.fullName}
			          name="fullName"
	          		  onChange={this.onChange}
			        />
		        </Grid>
		        <Grid item xs={6} sm={3}>
			        <TextField
			          required
			          id="id"
			          label="id"
			          placeholder="ID"
			          defaultValue="ID"
			          className={classes.textField}
			          margin="normal"
			          value={this.state.id}
			          name="id"
	          		  onChange={this.onChange}
			        />
		        </Grid>
		        <Grid item xs={12} sm={6}>
		              <input
				        accept="image/*"
				        className={classes.input}
				        id="raised-button-file"
				        multiple
				        type="file"
				        onChange={this.onImageChange.bind(this)}
				      />
	                <label htmlFor="raised-button-file">
				        <Button variant="raised" component="span" className={classes.button} >
				          Upload your id Image
				        </Button>
				    </label>
	            </Grid>
				<h2>personalImgUrl: <input placeholder="personalImgUrl" name="personalImgUrl" onChange={this.onChange}/></h2>
				<br/><br/>
				<h2>workHour: <input placeholder="workHour" name="workHour" onChange={this.onChange}/></h2>
				<br/><br/>
				<input type="radio" value="MALE" name="gender" onChange={this.onChange}/> Male
                <input type="radio" value="FEMALE" name="gender" onChange={this.onChange}/> Female
				<br/><br/>
				<div><button onClick ={this.AddLabTechnciansClick} > AddLabTechncians </button></div>	
				</Grid>
			</div>
			)
	}
}

AddLabTechncians.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddLabTechncians);

