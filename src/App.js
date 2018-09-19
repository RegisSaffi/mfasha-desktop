import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MiniDrawer from './components/MiniDrawer.js'
import ImgMediaCard from './components/Card.js'
import LabelBottomNavigation from './components/BottomNav.js'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from './Login';
import { BrowserRouter as Router, Route, Link,Switch,Redirect} from "react-router-dom";



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

class App extends React.Component {

  constructor(props) {
  super(props);
  this.state={logged:true,}
  // Don't call this.setState() here!
  let loggedIn = window.localStorage.getItem('logged');
  if (loggedIn && Boolean(loggedIn) === true) {
    
    //window.sessionStorage.clear();
    
  }
  else
  {
   this.setState({logged:false})
  }
}

  render() {
 const {logged}=this.state;
      
      if(logged)
      {


    return (

      <div style={{height:'100%',position:'relative',bottom:0}}>
      <MuiThemeProvider  theme={theme}>
        <MiniDrawer />
        </MuiThemeProvider>
      
     </div>
     
    );
  }
  else
  {

return (

      <Router>
      <div>
      <Redirect to="/"/>
      <Login/>
    
    </div>
    </Router>
    );

  }
  }
}

export default App;
