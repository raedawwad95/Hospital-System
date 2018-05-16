import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar,
         Typography, IconButton, Switch, 
         FormControlLabel, FormGroup, Menu, MenuItem, Button,
         ListItemIcon, ListItemText, Paper, Divider, Grid, InputAdornment,
         List, ListItem, ListSubheader, FormControl, Input, TextField, InputLabel } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {NavLink} from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Collapse from 'material-ui/transitions/Collapse';
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
  primary: {},
  icon: {},
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  textField: {
    width: 185,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },

});

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      anchorEl: null,
      openDep: false,
      openLab: false,
      openDoc: false,
      openPat: false,
      userName: "",
      password: "",
      showPassword: false,
    }; 
    // this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickDep = this.handleClickDep.bind(this);
    this.handleClickLab = this.handleClickLab.bind(this);
    this.handleClickDoc = this.handleClickDoc.bind(this);
    this.handleClickPat = this.handleClickPat.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.onChange = this.onChange.bind(this);
    this.loginAdmin = this.loginAdmin.bind(this);
  }

  // handleChange(event, checked)  {
  //   this.setState({ auth: checked });
  // };
  handleMouseDownPassword(event) {
    event.preventDefault();
  };

  handleClickShowPassword() {
    this.setState({ 
      showPassword: !this.state.showPassword 
    });
  };

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  handleClickDep() {
    this.setState({ openDep: !this.state.openDep });
  };

  handleClickLab() {
    this.setState({ openLab: !this.state.openLab });
  };

  handleClickDoc() {
    this.setState({ openDoc: !this.state.openDoc });
  };

    handleClickPat() {
    this.setState({ openPat: !this.state.openPat });
  };

  loginAdmin(){
    var that = this
    var obj = {
      userName: this.state.userName,
      password: this.state.password
    }
    $.ajax({
      url:'/itDep/login',
      type:'POST',
      data:obj,
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

  componentDidMount() {
    var that = this
    $.ajax({
      url:'/itDep/isLogin',
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

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Admin Control Panel
            </Typography>
            {auth && (
              <div>

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
                  <div className={classes.root2}>
                    <List
                      component="nav"
                      subheader={<ListSubheader component="div">Controller Menu</ListSubheader>}
                    >
                      <ListItem button onClick={this.handleClickDep}>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        Department
                        {this.state.openDep ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={this.state.openDep} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <NavLink to = "/admin/addDoctorToDepartment" className= "navListItem">
                            <ListItem button className={classes.nested}>
                              Add Doctor to Department
                            </ListItem>
                          </NavLink>
                          <NavLink to = "/admin/addDept" className = "navListItem">
                            <ListItem button className={classes.nested}>
                              New Department
                            </ListItem>
                          </NavLink>
                          <NavLink to = "/admin/retriveAllDepts" className= "navListItem">
                            <ListItem button className={classes.nested}>
                              All Departments
                            </ListItem>
                          </NavLink>
                        </List>
                      </Collapse>

                      <Divider />

                      <ListItem button onClick={this.handleClickLab}>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        Labs
                        {this.state.openLab ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={this.state.openLab} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <NavLink to = "/admin/AddLabTechncians" className = "navListItem">
                            <ListItem button className={classes.nested}>
                              New Lab technician
                            </ListItem>
                          </NavLink>
                          <NavLink to = "/admin/retriveLabTech" className = "navListItem">
                            <ListItem button className={classes.nested}>
                              All lab technicians
                            </ListItem>
                          </NavLink>
                          <NavLink to = "/admin/retriveLabResults" className = "navListItem">
                            <ListItem button className={classes.nested}>
                              All labs results
                            </ListItem>
                          </NavLink>
                        </List>
                      </Collapse>

                      <Divider />

                      <ListItem button onClick={this.handleClickDoc}>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        Doctors
                        {this.state.openDoc ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={this.state.openDoc} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <NavLink to = "/admin/AddDoctor" className = "navListItem">
                            <ListItem button className={classes.nested}>
                              New Doctor
                            </ListItem>
                          </NavLink>
                          <NavLink to = "/admin/retriveAllDoctor" className = "navListItem">
                            <ListItem button className={classes.nested}>
                              All Doctors
                            </ListItem>
                          </NavLink>
                        </List>
                      </Collapse>

                      <Divider />

                      <ListItem button onClick={this.handleClickPat}>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        Patients
                        {this.state.openPat ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={this.state.openPat} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <NavLink to = "/admin/retrivePatient" className = "navListItem">
                            <ListItem button className={classes.nested}>
                              Search Patient
                            </ListItem>
                          </NavLink>
                          <NavLink to = "/admin/RetriveAllPatient" className = "navListItem">
                            <ListItem button className={classes.nested}>
                              All Patient
                            </ListItem>
                          </NavLink>
                        </List>
                      </Collapse>

                    </List>
                  </div>
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
                  name="userName"
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
                <Button variant="raised" color="secondary" className={classes.button} onClick={this.loginAdmin}>
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

AdminNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminNavbar);
/*
                <Button color="inherit">
                  <NavLink to = "/admin/retrivePatient" activeClassName = "is-active" className = "navItem">test</NavLink>
                </Button>
*/