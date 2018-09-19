import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ScrollWrapper from 'react-customized-scrollbar';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import MessageSharp from '@material-ui/icons/MessageSharp';

import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import '../App.css';

 
  var strings = {
  prefixAgo: null,
  prefixFromNow: null,
  suffixAgo: '',
  suffixFromNow: 'now',
  seconds: 'Now',
  minute: '1 min',
  minutes: '%d mins',
  hour: '1 hr',
  hours: '%d hrs',
  day: 'a day',
  days: '%d days',
  month: '1 month',
  months: '%d months',
  year: '1 year',
  years: '%d years',
  wordSeparator: ' '
};

const formatter = buildFormatter(strings);

const actions = [];


const styles = theme => ({

  bootstrapInput: {
    position:'relative',
    borderRadius: 20,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '7px 12px',
    width: '100%',
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
    height:'100%',
    width: '100%',
    overflow:'none',
  
  },
  list:{
    paddingTop:12,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:12,

    

  },
   badge: {
    top: -23,
    right: 10,
    // The border color match the background color.
    
  },
  grid: {
    height:'100%',
    
  },
});
class FolderList extends React.Component  {
  
  constructor(props)
  {
    super(props);
    let convs=window.localStorage.getItem('conversations');
    //alert(convs);
    if(convs===null)
    {
      convs=[];
        this.state={chats:convs,
      selectedIndex:'none',
      loaded:true,
    }
    }
    else
    {
    this.state={chats:JSON.parse(convs),
      selectedIndex:'none',
      loaded:true,
    }
  }
   // window.sessionStorage.clear();
  }


 loadRoomList=()=> {
 
 const doc=this;
     window.QiscusSDK.core.loadRoomList()
        .then(function (rooms) {
          var lists = rooms.map(function (room) {
            return room;
          });
          
          doc.setState({chats:lists,loaded:true,});
         // window.localStorage.setItem('mfasha', JSON.stringify(response.data[0]));
          window.localStorage.setItem('conversations',JSON.stringify(lists));
          console.log(JSON.stringify(lists));
        })
  };

componentDidMount()
{

const doc=this;

window.QiscusSDK.core.init({
      AppId: "mfasha-o0bdsooni5o4k2",
      mode: 'wide',
      templateFunction: function () { return '' },
      options: {
        loginSuccessCallback: function (data) {

          console.log('loginSuccessCallback', data);
          

           //window.QiscusSDK.core.UI.chatTarget('regi@gmail.com');
          
doc.loadRoomList();
         
     },

       newMessagesCallback: function (messages) {
        
 doc.loadRoomList();

        
      },
       chatRoomCreatedCallback: function (data) {
        // check if room already exists on sidebar
        var roomId = data.room.id;
      
      },
    }
});


window.QiscusSDK.core.setUser(JSON.parse(this.props.data).client_email, JSON.parse(this.props.data).client_distinct_id, JSON.parse(this.props.data).client_name, JSON.parse(this.props.data).client_image)

}


handleClick=a=>event=>
{
  event.preventDefault();
  
   window.QiscusSDK.render();
  window.QiscusSDK.core.UI.chatGroup(a)

   
};

 handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

render()
{ 
  const {classes}=this.props;
  const newchats=this.state.chats;
  const {loaded,selectedIndex}=this.state;
  



  return (
    <div className={classes.root}>

    <Grid container spacing={5} className={classes.grid}>

       <Grid item xs={4}  style={{overflow:'auto',}}> 

       <Paper style={{backgroundColor:'#fff',borderRadius:0,height:'100%'}}>


      <List >
      <ListItem>
<TextField
           fullWidth
        placeholder="Search chats..."
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
       
      />



      </ListItem>



          {
            
            newchats.length==0 ? 
       
       loaded===true ? 
               <ListItem>
<Typography variant='title'>No available conversations, create conversations with some people they will apear here.</Typography>
      </ListItem>:
          
              <ListItem>
<Typography variant='title'>Loading conversations...</Typography>
      </ListItem>:
              
             newchats.map((chat,index)=> (
    
           
             <div  onClick={event => this.handleListItemClick(event, index)}>
            <ListItem button className={classes.list} type='button' onClick={this.handleClick(chat.id)} selected={this.state.selectedIndex === index}>
          <Avatar alt={chat.name} src={chat.avatar}onError={(e)=>{e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAB3CAMAAACDpqqpAAAAMFBMVEXR1dr////O0tf6+/vR09nZ29/19vfi5OfV19zz8/TU2dzd3+Po6uzw8PHk5+r///2Fq6rQAAADNUlEQVR4nO2b3bKrIAxGEaLi//u/7QGrPd2tYqIonzOuK2d6s4aGEAIo9fDw8PDwwICU1srWeV5b93EniPK2KsxI0drUOlxIO+3MMWQz/U0GvilM9k13A3cqf709Lbq7rotFcRc8DaWWC6LLYcU8y8yYc1AJmTt3U/SpDdfQZRZSH39sU0suk4e8Z6rUlguQXZuhfynw1idqWeZD1qU2/YEVLiMlWqLhDbrHgGX4mm0ON+ylQB0ry2heepmASjJ2uehaIU+t+0kjMc96oImq+fnFA1W9dyL1AkidRLMUSl2ZYM34jQFSt6JBz0xq3w9urM6vvR71eEjVgabpjdWF0xQpr99YXbgkQdUwskKgBaocheVXCaQuLHqb1L4f1LJRb+rUwm8a2Sx1KSa18RvZmHtATgpIuNEYh/1RP8iN1ZWubqvO7E9/glIKCBckD0iG8YdIUmDWU0mH+gVMw1TW582QVlPdC9WRDlBFPWqojoCsST3kIPnlRc4P9w7qZMCFO7+fkVr1F27NjpNdZtgJEmpPPcKuBpD21BPcYAebpB5m1Y7Ub3zD26Gi1Ix/4C1LgPHCzDFY9wNmiDNRIQfdsV1A4iX1Cb01U/EuT/2nCN4XhCp2v6FgXwOnS7pAcL9ksNWD0Y6tfuOACS5LqEl9RAf31zCNoyV0yByqh/EDBdUhq8aZcBlTIauHC1+UrvoStFGAIatv7K0tauGo1OrbngngV2Fbmw3MPZJne4sHdnX9DaOLZGpId1b/yzSA7sTrwxi0mNFrLx4X6JBOBoi2suIHbvPaguR3UroRn7S37n9KLe47R/LbDS7ke0rsTtTI7/HM8nVSebtXfJQvVaoJS/kR8Zd8mrCp5RcyFkf+arSNIe4prl1fteChI0P+wiaH5i+dPKprqjJSeWRxT3dBsiErv6TGwZz/MK834Sf3exlcyJ848K7MOmfIJ8rzChste5sp57SX+jvuM0ox+TnjfnTZ5zCc4b7jIiaIO8nvYe4kekUme/h9hNjHwuJbmAeIfPghfGV3iLi97M0j9KhEHfb6skj3xDy42XHN+wgm4qJ6bbxEPWANnynGJ2J+FL4nPQznqO8f5V4hMbmJ58sAAAAASUVORK5CYII="}} />
                 <ListItemText wrap primary={chat.name} secondary={ chat.last_comment_message.substring(0,1)==='[' ? 'Sent an attachment' : chat.last_comment_message} />

          <ListItemSecondaryAction>
             
             {chat.count_notif===0 ? 

          <Typography variant='caption' className={classes.padding}><TimeAgo date={chat.last_comment_message_created_at} formatter={formatter} /> &nbsp;&nbsp;</Typography>
              :

           <Badge color="primary" badgeContent={chat.count_notif} classes={{ badge: classes.badge }} >
        <Typography variant='caption' className={classes.padding}><TimeAgo date={chat.last_comment_message_created_at} formatter={formatter} /> &nbsp;&nbsp;</Typography>
      </Badge>
  }
              </ListItemSecondaryAction>

        </ListItem>
         <Divider inset light/>
         </div>
          
          ))}



       
      </List>
      </Paper>
    </Grid>
   
    <Grid item xs={8}>
{
  selectedIndex==='none' ?

    <center>
    <MessageSharp color="primary" style={{marginTop:200,height:100,width:100}}/>
<Typography variant='body1'>Please select one conversation and start chatting</Typography>
<div id="qiscus-widget" style={{height:'100%',}}></div>
</center>:
    <div id="qiscus-widget" style={{height:'100%',backgroundColor:'#f2f2f2'}}></div>
}
    </Grid>
    </Grid>

    </div>
  );
}
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);