import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import HelpSharp from '@material-ui/icons/HelpSharp';

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import App from '../App';

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


const styles = {
  root: {
    flexGrow: 1,

  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },


};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute" style={{height:150,zIndex:100,}}>
        <Toolbar>
        

          <Link to="/app">
          <IconButton>
          <HelpSharp/>
          </IconButton>
          </Link>

        </Toolbar>
               
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);