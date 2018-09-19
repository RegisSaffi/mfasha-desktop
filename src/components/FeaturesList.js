import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import Photo from '@material-ui/icons/Photo';
import MessageSharp from '@material-ui/icons/MessageSharp';
import Star from '@material-ui/icons/Star';
import Info from '@material-ui/icons/Info';
import People from '@material-ui/icons/People';
import InsertChartSharp from '@material-ui/icons/InsertChartSharp';
import SettingsSharp from '@material-ui/icons/SettingsSharp';
import Forum from '@material-ui/icons/Forum';
import Share from '@material-ui/icons/Share';

const styles = theme => ({
  root: {
 
    width: '100%',
   

    
  },
});

function FeaturesList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <Avatar style={{backgroundColor:'#0373b1'}}>
          <MessageSharp/>
          </Avatar>
          
          <ListItemText primary="Communicate" secondary="Instantly communicate with your audiences on the go." />
        </ListItem>
        <ListItem>
           <Avatar style={{backgroundColor:'#0373b1'}}>
          <Photo/>
          </Avatar>
          <ListItemText primary="Add more photos" secondary="upload photos from your computer." />
         
        </ListItem>
        <ListItem>
          <Avatar style={{backgroundColor:'#0373b1'}}>
          <Forum/>
          </Avatar>

          <ListItemText primary="Posts and comments" secondary="Add more posts and view comments in easy way." />
        </ListItem>
    
      
      </List>
    </div>
  );
}

FeaturesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeaturesList);