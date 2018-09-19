import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import WorkRounded from '@material-ui/icons/WorkRounded';
import NotificationsSharp from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar'
import  {SimpleList} from './CompanyMenu.js';
import FolderList from './ChatList.js'
import Button from '@material-ui/core/Button';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AddAPhoto from '@material-ui/icons/AddAPhoto';

import PersonAdd from '@material-ui/icons/PersonAdd';

import EditIcon from '@material-ui/icons/Edit';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LabelBottomNavigation from './BottomNav.js'




const theme = createMuiTheme({
  palette: {
    primary:{ 
    main: '#0373b1'
  },
    secondary: {
      main: '#014b73',
    },
  },
});


const drawerWidth = 240;

const actions = [
  { icon: <AddAPhoto />, name: 'Add photos' },
  { icon: <EditIcon />, name: 'Create a post' },
  { icon: <PersonAdd />, name: 'Add users' },
 
];


const styles = theme => ({
   menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

   bootstrapInput: {
    borderRadius: 20,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    marginLeft:10,
    padding: '10px 12px',
    width: 'calc(100% - 1px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
},

  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    bottom:0,
    overflow: 'none',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    overflow:'none',
    zIndex:100,
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  flex: {
    flexGrow: 1,
    textAlign:'left',
  },
  content: {
    
    marginBottom:100,
    flexGrow: 1,
    backgroundColor: '#fff',
    height:'"100%"',


  },
   speedDial: {
    position: 'fixed',
    bottom: theme.spacing.unit * 15,
    right: theme.spacing.unit * 4,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    sopen:false,
    shidden:false,
  };

  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  let loggedIn = window.localStorage.getItem('logged');
  if (loggedIn && Boolean(loggedIn) === true) {

    const data=window.localStorage.getItem('mfasha');

    this.state={
      data: data
    //window.sessionStorage.clear(); 
  }
}
}





  handleDrawerOpen = () => {
    this.setState({ open: true });

  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


 handleClick = () => {
    this.setState(state => ({
      sopen: !state.sopen,
    }));
  };

  handleOpen = () => {
    if (!this.state.shidden) {
      this.setState({
        sopen: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      sopen: false,
    });
  };
//////////////////////////////////////////////////////















  render() {
    const { classes, theme } = this.props;
    const { shidden, sopen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Mfasha platform
            </Typography>

<TextField
        placeholder="Search..."
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
       
      />

 <IconButton
                  aria-haspopup="true"
                  color="inherit"
                >
                  <NotificationsSharp />
                </IconButton>

                 <IconButton
                  aria-haspopup="true"
                  color="inherit"
                >
                  <WorkRounded/>
                </IconButton>

               <IconButton
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Avatar alt={JSON.parse(this.state.data).client_name} src={JSON.parse(this.state.data).client_image}/>
                </IconButton>


          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar} >
           <Typography variant="title" color="inherit" style={{width:'100%',textAlign:'center',marginTop:20}}>
              Quick menu
            </Typography>
            <IconButton aria-haspopup="true"
                  color="inherit" onClick={this.handleDrawerClose} style={{marginTop:10}}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{SimpleList}</List>
          

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
           <FolderList data={this.state.data}/>
          

        </main>
         <SpeedDial
          ariaLabel="SpeedDial"
          className={classes.speedDial}
          hidden={false}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={sopen}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
        <MuiThemeProvider  theme={theme}>
        <LabelBottomNavigation/>
        </MuiThemeProvider>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);