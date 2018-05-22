import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar,
         Typography, IconButton, Switch, Avatar,
         FormControlLabel, FormGroup, Menu, MenuItem, Button,
         ListItemIcon, ListItemText, Paper, Divider, Grid, InputAdornment,
         List, ListItem, ListSubheader, FormControl, Input, TextField, InputLabel } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import {NavLink, Link} from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  root2: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  textField: {
    width: 185,
    color: theme.palette.common.white,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    color: theme.palette.common.white,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  button2: {
    color: "white",
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

class Navabar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      anchorEl: null,
      username: "",
      password: "",
      showPassword: false,
      user: [],
    }; 
    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  handleChange(event, checked)  {
    this.setState({ auth: checked });
  };

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

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

  login(){
    var that = this
    var obj = {
      username: this.state.username,
      password: this.state.password
    }
    $.ajax({
      url:'/api/userController/login',
      type:'POST',
      data:obj,
      success:function(data){
        alert("Login sucess");
        that.setState({
          auth: true
        })
        that.getUserData();
      },
      error:function(err){
        console.log(err);
      }
    });
  }

  componentDidMount() {
    var that = this
    $.ajax({
      url:'/api/userController/isLogin',
      type:'GET',
      success:function(data){
        that.setState({
          auth: true
        })
      },
      error:function(err){
        console.log(err);
      }
    });
  }

  getUserData() {
    var that = this
    $.ajax({
      url:'/api/userController/getLogin',
      type:'GET',
      success:function(data){
        console.log(data)
      },
      error:function(err){
        console.log(err);
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Hospital-System
            </Typography>
            {auth && (
              <div>
                <Button component={Link} to="/" className={classes.button2}>
                  Home
                </Button>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >                    
                  <MenuItem onClick={this.handleClose} component={Link} to="/user/getAppointment">Get appointment</MenuItem>
                  <Divider />
                  <MenuItem onClick={this.handleClose} component={Link} to="/user/update">Change password</MenuItem>
                  <MenuItem onClick={this.handleClose} component={Link} to="/api/userController/logout">Logout</MenuItem>
                </Menu>
              </div>
            )}
            {!auth && (
              <div>
                <TextField
                  required
                  id="username"
                  label="UserName"
                  placeholder="Enter username"
                  className={classes.textField}
                  margin="normal"
                  value={this.state.username}
                  name="username"
                  onChange={this.onChange}
                />
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
                <Button variant="raised" color="secondary" className={classes.button} onClick={this.login}>
                  Login
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navabar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navabar);