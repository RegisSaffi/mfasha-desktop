import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
export const SimpleList= (
    <div>
      <List component="nav">
       
        <ListItem button>
          <ListItemIcon>
            <MessageSharp />
          </ListItemIcon>
          <ListItemText primary="Posts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Photo />
          </ListItemIcon>
          <ListItemText primary="Photos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Reviews" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsertChartSharp />
          </ListItemIcon>
          <ListItemText primary="Insights" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsSharp />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
         <ListItem button>
          <ListItemIcon>
            <Forum />
          </ListItemIcon>
          <ListItemText primary="Forum" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <Share />
          </ListItemIcon>
          <ListItemText primary="Share" />
        </ListItem>
      </List>
    </div>
  );