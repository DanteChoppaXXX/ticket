import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Link } from "react-router-dom";
//import "../fonts/fonts.css";

//import { Search, FavoriteBorderTwoTone, Event, MonetizationOn, AccountCircle } from '@material-ui/icons';
import discoverIcon from '../icons/icon_discover.png'; // Replace with your image paths
import forYouIcon from '../icons/icon_favorite.png';
import myEventIcon from '../icons/icon_ticket.png';
import sellIcon from '../icons/icon_sell.png';
import accountIcon from '../icons/icon_account.png';


const BottomNavBar = () => {
  const iconStyle = { width: '30px', height: '30px' };
  const labelStyle = { fontSize: '6px', transform: 'scale(0.8)' }; // Use the desired font size

  return (
    <BottomNavigation showLabels style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, height: '100px', paddingBottom: '20px' }}>
      <BottomNavigationAction label="Discover" icon={<img src={discoverIcon} alt="Discover" style={iconStyle} />} style={labelStyle} component={Link} to="/myevent" />
      <BottomNavigationAction label="For You" icon={<img src={forYouIcon} alt="For You" style={iconStyle} />} style={labelStyle} component={Link} to="/email" />
      <BottomNavigationAction label="My Events" icon={<img src={myEventIcon} alt="My Event" style={iconStyle} />} style={labelStyle} component={Link} to="/ticket" />
      <BottomNavigationAction label="Sell" icon={<img src={sellIcon} alt="Sell" style={iconStyle} />} style={labelStyle} component={Link} to="/fee" />
      <BottomNavigationAction label="MyAccount" icon={<img src={accountIcon} alt="My Account" style={iconStyle} />} style={labelStyle} component={Link} to="/myaccount" />
    </BottomNavigation>
  );
};

export default BottomNavBar;

