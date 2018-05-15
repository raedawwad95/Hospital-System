import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { withStyles, MenuItem, TextField, Input, InputLabel, InputAdornment,
		FormControl, FormHelperText, IconButton, Paper, Grid,
		Button, Select, Card, CardActions, CardContent, Typography, CircularProgress } from 'material-ui';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import green from 'material-ui/colors/green';

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
	  formControl: {
	    margin: theme.spacing.unit,
	    minWidth: 120,
	  },
	  selectEmpty: {
	    marginTop: theme.spacing.unit * 2,
	  },
	  card: {
	    minWidth: 275,
	  },
	   buttonSuccess: {
	    backgroundColor: green[500],
	    '&:hover': {
	      backgroundColor: green[700],
	    },
	  },
	  fabProgress: {
	    color: green[500],
	    position: 'absolute',
	    top: -6,
	    left: -6,
	    zIndex: 1,
	  },
	  buttonProgress: {
	    color: green[500],
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    marginTop: -12,
	    marginLeft: -12,
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
			loading: false,
    		success: false,
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

    onImageChangeID(e){
      var imgReader = new FileReader();
      var img = e.target.files[0];
      var that = this;
      var imgCode = ''
      // var target = e.target.name;
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
            imageOfId: data.data.link,
            loading: false,
            success: true,
          });
        })
        .fail(function( jqXHR, textStatus ) {
          alert("item not found, textStatus");
        });
      };
      imgReader.readAsDataURL(img)
    }

    onImageChangeP(e){
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
            personalImgUrl: data.data.link,
            loading: false,
            success: true,
          });
        })
        .fail(function( jqXHR, textStatus ) {
          alert("item not found, textStatus");
        });
      };
      imgReader.readAsDataURL(img)
    }
  handleButtonClick() {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        }
      );
    }
  }

	render(){
		const { classes } = this.props;
		const { loading, success } = this.state;
		const buttonPersonalImg = classNames({
	      [classes.buttonSuccess]: success,
	    });	
		const buttonIDImg = classNames({
	      [classes.buttonSuccess]: success,
	    });	
		return(
			<div>
				<Card className={classes.card}>
				<CardContent>
			<Grid container spacing={24}>
				<Grid item xs={6} sm={3}>
					<TextField
			          required
			          id="username"
			          label="UserName"
			          placeholder="UserName"
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
			          className={classes.textField}
			          margin="normal"
			          value={this.state.id}
			          name="id"
	          		  onChange={this.onChange}
			        />
		        </Grid>
		        <Grid item xs={5} sm={2}> </Grid>
		        <Grid item xs={8} sm={5}>
		              <input
		              	required
				        accept="image/*"
				        className={classes.input}
				        id="raised-button-file"
				        type="file"
				        onChange={this.onImageChangeID.bind(this)}
				      />
	                <label htmlFor="raised-button-file">
				        <Button variant="raised" component="span" className={buttonIDImg} disabled={loading} onClick={this.handleButtonClick.bind(this)} >
				          Upload your national ID Image
				        </Button>
				    </label>
	            </Grid>
	            <Grid item xs={9} sm={5}>
		              <input
		              	required
				        accept="image/*"
				        className={classes.input}
				        id="personalImgUrl"
				        type="file"
				        onChange={this.onImageChangeP.bind(this)}
				      />
	                <label htmlFor="personalImgUrl">
				        <Button variant="raised" component="span" className={buttonPersonalImg} disabled={loading} onClick={this.handleButtonClick.bind(this)}>
				          Upload your personal image
				        </Button>
				      	{loading && <CircularProgress size={24} className={classes.buttonProgress} />}

				    </label>
	            </Grid>
	            <Grid item xs={5} sm={3}> </Grid>
	            <Grid item xs={7} sm={3}>
			        <TextField
			          required
			          id="workHour"
			          label="workHour"
			          placeholder="workHour"
			          className={classes.textField}
			          margin="normal"
			          value={this.state.workHour}
			          name="workHour"
	          		  onChange={this.onChange}
			        />
		        </Grid>
		        <Grid item xs={11} sm={5}> 
		        	<FormControl className={classes.formControl}>
			          <InputLabel htmlFor="gender-helper">Gender</InputLabel>
			          <Select
			            value={this.state.gender}
			            onChange={this.onChange}
			            input={<Input name="gender" id="gender-helper" />}
			          >
			            <MenuItem value="">
			              <em>None</em>
			            </MenuItem>
			            <MenuItem value={"Male"}>Male</MenuItem>
			            <MenuItem value={"Female"}>Female</MenuItem>
			          </Select>
			          <FormHelperText>please select your gender</FormHelperText>
			        </FormControl>
		        </Grid>
		        </Grid>
				<CardActions>
				<Grid item xs={9} sm={5}> </Grid>
		        <Grid item xs={5} sm={2}>
					<Button variant="raised" color="primary" className={classes.button} onClick={this.AddLabTechnciansClick} >
			        	Submit
			      	</Button>
		      	</Grid>
				</CardActions>
				</CardContent>
				</Card>
			</div>
			)
	}
}

AddLabTechncians.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddLabTechncians);
