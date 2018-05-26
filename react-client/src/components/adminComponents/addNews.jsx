import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { withStyles, MenuItem, TextField, Input, InputLabel, InputAdornment,
		FormControl, Paper, Grid, CardHeader, FormHelperText,
		Button, Select, Card, CardActions, CardContent, CircularProgress } from 'material-ui';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';
import green from 'material-ui/colors/green';


const styles=theme =>({
	container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	   textField: {
	    width: 200,
	  },
	  card: {
	    minWidth: 275,
	  },
	  input: {
	    display: 'none',
	  },
	   buttonProgress: {
	    color: green[500],
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    marginTop: -12,
	    marginLeft: -12,
	    padding:50,
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

})

 class addNews extends React.Component {
	constructor(props){
		super(props);
		this.state={
			newsSubject:"",
			newsText:"",
			Image:"",
			loading: false,
    		success: false,
			
		}
		this.addNewsClick=this.addNewsClick.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onImageChange=this.onImageChange.bind(this);
		this.handleButtonClick=this.handleButtonClick.bind(this);

	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		});

	}

addNewsClick(){
	var that=this;
	
	$.ajax({
		type:"POST",
		url:'/news',
	    data:that.state,
	    success:function(data){
	    	alert("data added")
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
            Image: data.data.link,
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


	render() {
		const { classes } = this.props;
		const { loading, success } = this.state;
		const buttonImage = classNames({
	      [classes.buttonSuccess]: success,
	    });	
		return (
			<div>
			
			<Card className={classes.card}>
				<CardContent>
			<Grid container spacing={24}>
				<Grid item xs={6} sm={3}>
					<TextField
			          required
			          id="newsSubject"
			          label="newsSubject"
			          placeholder="newsSubject"
			          className={classes.textField}
			          margin="normal"
			          value={this.state.newsSubject}
			          name="newsSubject"
	          		  onChange={this.onChange}
			        />
			        </Grid>
			        <Grid item xs={6} sm={3}>
			        <TextField
			          required
			          id="newsText"
			          label="newsText"
			          placeholder="newsText"
			          className={classes.textField}
			          margin="normal"
			          value={this.state.newsText}
			          name="newsText"
	          		  onChange={this.onChange}
			        />
			        </Grid>
			        <Grid item xs={9} sm={3}>
		              <input
		              	required
				        accept="image/*"
				        className={classes.input}
				        id="Image"
				        type="file"
				        onChange={this.onImageChange.bind(this)}
				      />
	                <label htmlFor="Image">
				        <Button variant="raised" component="span" className={buttonImage} disabled={loading} onClick={this.handleButtonClick.bind(this)}>
				          Upload Image
				        </Button>
				      	{loading && <CircularProgress size={24} className={classes.buttonProgress} />}

				    </label>
				    </Grid>
			        <CardActions>
		       		 <Grid item xs={5} sm={3}>
					<Button variant="raised" color="primary"  onClick={this.addNewsClick} >
			        	Submit
			      	</Button>
		      	</Grid>
				</CardActions>
			        </Grid>
		       </CardContent>

				</Card>
			</div>
		);
	}
}




addNews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addNews);
