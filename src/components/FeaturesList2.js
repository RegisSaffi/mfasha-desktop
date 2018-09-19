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

function FeaturesList2(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
       <ListItem>
           <Avatar style={{backgroundColor:'#0373b1'}} style={{backgroundColor:'#0373b1'}}>
          <Star/>
          </Avatar>
          <ListItemText primary="Ratings & Reviews" secondary="Check out new ratings and reviews easily." />
        </ListItem>
            <ListItem>
          <Avatar style={{backgroundColor:'#0373b1'}}>
          <InsertChartSharp/>
          </Avatar>
          <ListItemText primary="Analytics" secondary="Discover more analytics information." />
        </ListItem>
      
       <ListItem>
           <Avatar style={{backgroundColor:'#0373b1'}} style={{backgroundColor:'#0373b1'}}>
          <SettingsSharp/>
          </Avatar>
          <ListItemText primary="Tools and settings" secondary="Discover more tools to boost your company." />
        </ListItem>
      </List>
    </div>
  );
}

FeaturesList2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeaturesList2);