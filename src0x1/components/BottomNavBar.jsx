import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import discoverIcon from '../icons/icon_discover.png';
import forYouIcon from '../icons/icon_favorite.png';
import myEventIcon from '../icons/icon_ticket.png';
import sellIcon from '../icons/icon_sell.png';
import accountIcon from '../icons/icon_account.png';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 100,
    height: '100px',
    paddingBottom: '20px'
  },
  icon: {
    width: '30px',
    height: '30px'
  },
  label: {
    fontSize: '6px',
    transform: 'scale(0.8)'
  },
  active: {
    color: 'blue !important',
    '& img': {
      filter: 'invert(30%) sepia(90%) saturate(1000%) hue-rotate(190deg) brightness(100%) contrast(90%)'
    }
  }
});

const BottomNavBar = () => {
  const classes = useStyles();
  const location = useLocation();

  const getClassName = (path) => {
    return `${classes.label} ${location.pathname === path ? classes.active : ''}`;
  };

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        label="Discover"
        icon={<img src={discoverIcon} alt="Discover" className={classes.icon} />}
        className={getClassName('/home')}
        component={Link}
        to="/home"
      />
      <BottomNavigationAction
        label="For You"
        icon={<img src={forYouIcon} alt="For You" className={classes.icon} />}
        className={getClassName('/email')}
        component={Link}
        to="/email"
      />
      <BottomNavigationAction
        label="My Events"
        icon={<img src={myEventIcon} alt="My Event" className={classes.icon} />}
        className={getClassName('/myevent')}
        component={Link}
        to="/myevent"
      />
      <BottomNavigationAction
        label="Sell"
        icon={<img src={sellIcon} alt="Sell" className={classes.icon} />}
        className={getClassName('/fee')}
        component={Link}
        to="/fee"
      />
      <BottomNavigationAction
        label="Account"
        icon={<img src={accountIcon} alt="My Account" className={classes.icon} />}
        className={getClassName('/myaccount')}
        component={Link}
        to="/update-details"
      />
    </BottomNavigation>
  );
};

export default BottomNavBar;
