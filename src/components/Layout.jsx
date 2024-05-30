import React from "react";
import Logo from "../assets/image 1.png";
import { AppBar, Icon, Box, Toolbar, /*Typography*/ } from "@material-ui/core";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
//import LockIcon from "@material-ui/icons/Lock";

import { makeStyles } from "@material-ui/core/styles";
import UserProfile from "../assets/user.png";
import { Container } from "@material-ui/core";
// import Battery from "../assets/battery.png";
// import WifiIcon from "@material-ui/icons/Wifi";
import applebar from "../assets/iphonebatterysignale.png";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, overflow: "hidden", width: "100%" },
  header: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "#262626",
    width: "1.3em",
    height: "1.3em",

    "& > svg": {
      width: "1.3em",
      height: "1.3em",
    },
  },
  boxicon: {
    marginRight: theme.spacing(1),
  },
  appBar: {
    backgroundColor: "#fff",
    marginTop: "57px",
  },
  appleIcons: {
    // display: "flex",
    height: "40px",
    display: "none",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  battery: {
    width: "67px",
    // height: "12px",
    marginTop: "4px",
    marginRight: "4px",
  },
  time: {
    marginLeft: "12px",
    fontSize: "15px",
    fontWeight: 900,
    borderRadius: "16px",
    padding: " 2px",
    color: "#FFF",
    // background: "#14ac19",

    // color for screen record
    background: "#ea0606",

    width: "55px",
    textAlign: "center",
  },
  signal: {
    marginRight: "4px",
    display: "flex",
    alignItems: "center",
    color: "#FFF",
    "& > span": {
      marginLeft: "8px",
    },
  },

  siteDetails: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: theme.zIndex.modal + 40,
    background:
      "#202731",
  },
  siteRoute: {
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
    color: "#000000",
  },
  siteDetailsIcon: {
    "& > svg": {
      fontSize: "0",
      width: "0",
      height: "0",
    },
  },
  siteName: {
    fontSize: "0.8rem",
    marginLeft: "4px",
  },
  footer: {
    background: "#FFFFFF",
    color: "#FFFFFF",
  },
  footerLink: {
    color: "#FFFFFF",
  },
  wifi: {
    fontSize: "0.1rem",

    "& > svg": {
      fontSize: "1.1rem",
    },
  },
}));

const Layout = ({ children, navbar, time }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.siteDetails}>
        <div className={classes.appleIcons}>
          <span className={classes.time}>{time}</span>
          <div className={classes.signal}>
            {/* <span style={{ fontSize: "14px" }}>
              <i className="fa fa-signal" aria-hidden="true"></i>
            </span>
            <span className={classes.wifi}>
              <WifiIcon />
            </span> */}
            <img src={applebar} alt="battery" className={classes.battery} />
          </div>
        </div>
        <div className={classes.siteRoute}>
          {/*<span className={classes.siteDetailsIcon}>
            <LockIcon />
          </span>*/}
          {/*<Typography
            className={classes.siteName}
            variant="subtitle1"
            component="span"
          >
            my.ticketmaster.com
          </Typography>*/}
        </div>
      </div>
      {navbar && (
        <AppBar className={classes.appBar} position="relative">
          <Toolbar>
            <Link to="/">
              <img width={17} src={Logo} alt="logo" />
            </Link>

            <Box className={classes.header}>
              <Box className={classes.boxicon}>
                <img src={UserProfile} alt="user icon" width={36} />
              </Box>
              <Icon className={classes.icon}>
                <SearchIcon />
              </Icon>
              <Icon className={classes.icon}>
                <MenuIcon />
              </Icon>
            </Box>
          </Toolbar>
        </AppBar>
      )}
      <Box my={3}>
        <Container>{children}</Container>
      </Box>
{/*       <Box textAlign="left" p={2} mt={8} className={classes.footer}>
        <p>
          By continuing past this page, you agree to our{" "}
          <span className={classes.footerLink}>Terms of Use</span>
        </p>
        <p>
          <span className={classes.footerLink}>Privacy Policy</span> | 1999-2023
          Ticketmaster. All rights reserved.
        </p>
      </Box> */}
    </div>
  );
};

export default Layout;
