import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import AppBar from './components/AppBar.js'
import ImgMediaCard from './components/Card.js'
import LabelBottomNavigation from './components/BottomNav.js'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle';
import SecuritySharp from '@material-ui/icons/SecuritySharp';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import ScrollWrapper from 'react-customized-scrollbar'


import axios from 'axios';
import QRCode from 'qrcode-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link,Switch,Redirect} from "react-router-dom";

import App from './App';
import FeaturesList from './components/FeaturesList.js';
import FeaturesList2 from './components/FeaturesList2.js';
const styles = theme => ({
  holder: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 5,
   
   
    position:'absolute',
    margin:'auto',
    zIndex:100,
    display: 'inlineBlock',
    
    top: 20,
    left: '10%',
    right: '10%',

  },
  grid2: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit,
  },
   margin: {
    margin: theme.spacing.unit,
  },
});

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

class Login extends Component {

 state = {
    open:false,
    vertical: 'bottom',
    horizontal: 'right',
    email: '',
    code: '',
    loading:false,
    error:false,
    errorText:'',
    error2:false,
    error2Text:'',
    logged:false,
  
  };



//  componentDidMount() {

// axios.defaults.baseURL = 'http://mfasha.trumpet.rw/android/api.php';
// axios.defaults.headers.post['Access-Control-Allow-Origin']=' *';
// axios.defaults.headers.post['Access-Control-Request-Headers']='Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Origin';
 
//       var bodyFormData = new FormData();
//        bodyFormData.set('action', 'check_client');
//         bodyFormData.set('email', 'regissaffi@gmail.com');
//         axios({
//               method: 'post',
//               url: '',
//               data: bodyFormData,
//             })
//             .then(function (response) {
//                 console.log(response);
//               })
//               .catch(function (error) {
//                 console.log(error);
//             });
// }

constructor(props) {
  super(props);
  // Don't call this.setState() here!
  let loggedIn = window.localStorage.getItem('logged');
  if (loggedIn && Boolean(loggedIn) === true) {
    
    this.state={loading:false,logged:true};
  }
}



 handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    //console.log(this.state.email);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit=sub=>event=>{

  
if(this.state.email=='')
  { 
    this.setState({loading:false,error:true,errorText:'Email is empty',error2:false,error2Text:'',}); 
  }
  else if(this.state.code=='')
  {
    this.setState({loading:false,error:false,errorText:'',error2:true,error2Text:'Code is empty',}); 
  }
  else
  { 

this.setState({loading:true,error:false,errorText:'',error2:false,error2Text:'',});
const doc=this;
console.log("error");
axios.defaults.baseURL = 'http://mfasha.trumpet.rw/android/api.php';
axios.defaults.headers.post['Access-Control-Allow-Origin']=' *';
axios.defaults.headers.post['Access-Control-Request-Headers']='Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Origin';
 
      var bodyFormData = new FormData();
       bodyFormData.set('action', 'check_client');
        bodyFormData.set('email', this.state.email);
        bodyFormData.set('phone', this.state.email);
        axios({
              method: 'post',
              url: '',
              data: bodyFormData,
            })
            .then(function (response) {
                console.log(response);

                if(response.data==='error')
                {
                  doc.setState({loading:false,error:true,open:true,errorText:'Account not found,enter valid phone or email'}); 
                }
                else
                {
                  //alert(response.data[0].client_name);
                  
                 



window.QiscusSDK.core.init({
      AppId: "mfasha-o0bdsooni5o4k2",
      options: {
        loginSuccessCallback: function (data) {

          console.log('loginSuccessCallback', data);


          
          window.localStorage.setItem('logged', true);
          window.localStorage.setItem('mfasha', JSON.stringify(response.data[0]));

          doc.setState({loading:false,logged:true});

  
      // Do something after successfully login
    }
    }
});

window.QiscusSDK.core.setUser(response.data[0].client_email, response.data[0].client_distinct_id, response.data[0].client_name, response.data[0].client_image)






                }

               
              })
              .catch(function (error) {
                console.log(error);
                doc.setState({loading:false,error:false,open:true,errorText:'Failed to connect to the server, check your internet.'});
            });

    }
  };



  render() {
   
    const {loading,logged,open,vertical,horizontal } = this.state;
   
   const { classes} =this.props;


   if(logged==true)
   {
    return (

      <Router>
      <div>
      <Redirect to="/app"/>
      <App/>
      
  
    </div>
    </Router>
    );
  }
  else
  { 
    return (

      <div className={classes.root}>
      <MuiThemeProvider  theme={theme}>
        <AppBar />
      
      

<Paper className={classes.holder}>


<div>
       <Grid container spacing={16} className={classes.grid}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
<center>
<QRCode value="http://facebook.github.io/react/" size={150} fgColor='#0373b1' level='M' renderAs='svg' logo='./favicon.ico' logoWidth={30} />
        <Typography variant="headline" color="default" gutterBottom={true} style={{marginTop:5}}>
              Mfasha platform on Desktop
            </Typography>

        <Typography color="inherit" component='h4' gutterBottom={true}>
              Use mfasha platform on your computer for business management and communication.
            </Typography>
</center>


          </Paper>
        </Grid>
        <Grid item xs>
         <Card className={classes.card} >
      
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Scan QRCode or sign in to account.
          </Typography>
        
       



 <form className={classes.margin}>
        <Grid container spacing={16} alignItems="flex-end" className={classes.grid2}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item xs>
            <TextField id="input-with-icon-grid" error={this.state.error} helperText={this.state.errorText} label="Phone or email *" style={{width:'100%'}} onChange={this.handleChange('email')}/>
          </Grid>
        </Grid>

        <Grid container spacing={16} alignItems="flex-end" className={classes.grid2}>
          <Grid item>
            <SecuritySharp />
          </Grid>
          <Grid item xs>
            <TextField id="input-with-icon-grid" label="Security code *" error={this.state.error2} helperText={this.state.error2Text}  style={{width:'100%'}} onChange={this.handleChange('code')} />
          </Grid>
        </Grid>

        <Grid container spacing={16} alignItems="flex-end" className={classes.grid2}>
         
          <Grid item xs>
            <Button disabled={loading ? true : false} variant="contained" size="large" color="secondary" onClick={this.handleSubmit('sub')}>
          Sign in
        </Button>
      
         </Grid>
          <Grid item xs>
       
       {loading==true &&
       <CircularProgress className={classes.progress} /> 

       
      }
       
        </Grid>
         </Grid>
      </form>
        </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          help?
        </Button>
        <Button size="small" color="primary">
          Trouble signing in?
        </Button>
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
      

      <Snackbar
          anchorOrigin={{vertical,horizontal}} 
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.errorText}</span>}
        />



       <ScrollWrapper

    autoHeight
>
  <Grid container spacing={16}  style={{marginTop:5}}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>

          <FeaturesList/>

          </Paper>
        </Grid>
        <Grid item xs>

<FeaturesList2/>
        </Grid>
      </Grid>
       </ScrollWrapper>



</div>

      </Paper>
      </MuiThemeProvider>
 





     </div>
    
   
    );
  }
  }
}







Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);;
