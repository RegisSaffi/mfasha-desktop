import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/Home';
import ForumSharp from '@material-ui/icons/ForumSharp';
import People from '@material-ui/icons/People';
import Work from '@material-ui/icons/Work';

const styles = {
  root: {
    width:'90%',
    margin:"auto",
    position:'fixed',
    bottom:0,
    zIndex:100,
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} style={{width:'100%'}}>
        <BottomNavigationAction selected label="Home" value="home" icon={<Home />} style={{maxWidth:'100%'}}/>
        <BottomNavigationAction label="Feeds" value="feeds" icon={<ForumSharp/>} style={{maxWidth:'100%'}}/>
        <BottomNavigationAction label="Ratings" value="ratings" icon={<Work />} style={{maxWidth:'100%'}}/>
        <BottomNavigationAction label="People" value="people" icon={<People />} style={{maxWidth:'100%'}}/>
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);