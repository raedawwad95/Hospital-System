import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar,
         Typography, IconButton, Switch, 
         FormControlLabel, FormGroup, Menu, MenuItem, Button,
         ListItemIcon, ListItemText, Paper, Divider,
         List, ListItem, ListSubheader } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {NavLink} from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from 'material-ui/transitions/Collapse';

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
});

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      openDep: false,
      openLab: false,
      openDoc: false,
    }; 
    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickDep = this.handleClickDep.bind(this);
    this.handleClickLab = this.handleClickLab.bind(this);
    this.handleClickDoc = this.handleClickDoc.bind(this);
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

  handleClickDep() {
    this.setState({ openDep: !this.state.openDep });
  };

  handleClickLab() {
    this.setState({ openLab: !this.state.openLab });
  };

  handleClickDoc() {
    this.setState({ openDoc: !this.state.openDoc });
  };


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
            <NavLink to = "/admin" activeClassName = "is-active" exact = {true} className = "navItem">
              <Button color="inherit">
                Home
              </Button>
            </NavLink>
            {auth && (
              <div>
                <Button color="inherit">
                  <NavLink to = "/admin/retriveLabTech" activeClassName = "is-active" className = "navItem">test</NavLink>
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
                              New Lab technicians
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

                    </List>
                  </div>
                </Menu>
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