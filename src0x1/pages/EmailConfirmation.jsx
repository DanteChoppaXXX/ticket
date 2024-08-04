import React from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Container,
  Divider,
  Button,
  Paper,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import Avatar from "@material-ui/core/Avatar";
import Ticketmaster from "../assets/emaillogo.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import OrderNumber from "../assets/ticketnumber.jpeg";
import TodayOutlinedIcon from "@material-ui/icons/TodayOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ReplyIcon from "@material-ui/icons/Reply";
import LockIcon from "@material-ui/icons/Lock";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: "#222", color: "#fff" },
  appBar: {
    background: "rgba(0,0,0,0.97)",
  },
  toolbar: {
    flexDirection: "column",
  },
  appleIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    background: "rgba(255,255,255,0.97)",
    padding: theme.spacing(1, 0),
  },
  battery: {
    width: "22px",
    height: "12px",
    marginLeft: "4px",
    marginRight: "8px",
  },
  time: {
    marginLeft: "4px",
    fontSize: "16px",
    fontWeight: 900,
    borderRadius: "16px",
    padding: " 2px",
    // color: "#000",
    background: "#14ac19",

    // color for screen record
    // background: "#ea0606",

    width: "55px",
    textAlign: "center",
  },
  signal: {
    marginRight: "-8px",
    display: "flex",
    alignItems: "center",
    color: "#000",
    "& > svg": {
      marginRight: 2,
      fontSize: "18px",
    },
  },

  backButton: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  emailIcon: {
    display: "flex",
    "& svg": {
      color: "white",
    },
  },
  link: {
    color: "#0560C9",
    textDecoration: "underline",
  },
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  mailreference: {
    lineHeight: 1.25,
  },
  divider: {
    height: 4,
    marginBottom: 4,
    backgroundColor: "#0560C9",
  },
  img: {
    width: 120,
  },
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  user: {
    display: "flex",
    alignItems: "center",
  },
  orderImg: {
    width: "100%",
  },
  flexD: {
    display: "flex",
    marginBottom: 10,
    alignItems: "center",

    "& > svg": {
      color: "#818080",
    },
  },
  flexDInfo: {
    marginLeft: 10,
    color: "#f9f5f5",
  },
  btn: {
    backgroundColor: "#0560C9",
    color: "#fff",
  },
  alert: {
    border: "1px solid #8cbee7",
  },
  alertInbox: {
    background: "#eee",
    padding: "4px",
    fontSize: "10px",
    textAlign: "center",
    color: "black",
  },
  emailDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blue: {
    backgroundColor: "#0277bd",
    marginRight: "8px",
  },
  personal: {
    "& > strong": {
      fontSize: "14px",
    },
    "& > span": {
      fontSize: "10px",
      color: "#857f7f",
    },
    "& svg": {
      fontSize: "14px",
      marginLeft: "8px",
    },
  },
  replyIcon: {
    padding: "1px",
  },
  emailDate: {
    fontSize: "10px",
    color: "#857f7f",
    fontWeight: "300",
    marginLeft: "5px",
  },
  eD: {
    display: "grid",
    gridTemplateColumns: "70px 1fr",
    alignItems: "center",
    marginBottom: "6px",
    "& strong": {
      fontSize: "12px",
      "& span": {
        marginLeft: "6px",
      },
    },
  },
  regSpan: {
    fontSize: "12px",
    color: "#857f7f",
    fontWeight: "300",
  },
  gg: {
    fontSize: "12px",
  },
  paper: {
    padding: "12px",
    marginTop: "8px",
  },
}));

const EmailConfirmation = ({ info, time }) => {
  // * LOGICS
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();

  const { name, image, user, emailInfo, seatMap } = info;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div style={{ display: "flex", width: "100%" }}>
            <IconButton
              edge="start"
              className={classes.backButton}
              aria-label="back"
            >
              <ArrowBackIosIcon style={{ color: "white" }} />
            </IconButton>
            <div className={classes.emailIcon}>
              <IconButton edge="start" aria-label="archive">
                <ArchiveOutlinedIcon color={"white"} />
              </IconButton>
              <IconButton edge="start" aria-label="delete">
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              <IconButton edge="start" aria-label="email">
                <EmailOutlinedIcon />
              </IconButton>
              <IconButton edge="start" aria-label="email">
                <MoreHorizOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Box mt={7} paddingTop={5}>
          <Box mb={2}>
            <Typography
              className={classes.mailreference}
              variant="h5"
              color="initial"
            >
              You Got Tickets To {name}!{" "}
              <span className={classes.alertInbox}>Inbox</span>
            </Typography>
          </Box>
          <Box className={classes.emailDetails}>
            <div style={{ display: "flex" }}>
              <Avatar className={classes.blue}>T</Avatar>
              <Typography
                className={classes.personal}
                variant="subtitle2"
                color="initial"
              >
                <strong>
                  Ticketmaster <span className={classes.emailDate}> </span>
                </strong>
                <span style={{ display: "block" }} onClick={handleClick}>
                  to me
                  {open ? <ExpandLess /> : <ExpandMore />}
                </span>
              </Typography>
            </div>

            <div className={`${classes.emailIcon} ${classes.replyIcon}`}>
              <IconButton edge="start" aria-label="archive">
                <ReplyIcon />
              </IconButton>
              <IconButton edge="start" aria-label="email">
                <MoreHorizOutlinedIcon />
              </IconButton>
            </div>
          </Box>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Paper className={classes.paper} variant="outlined">
              <div className={classes.eD}>
                <Typography
                  variant="subtitle2"
                  className={classes.regSpan}
                  component="span"
                >
                  From
                </Typography>
                <Typography variant="subtitle2" component="span">
                  <strong>
                    Ticketmaster
                    <span className={classes.regSpan}>
                      noreply@ticketmaster.com
                    </span>
                  </strong>
                </Typography>
              </div>

              <div className={classes.eD}>
                <Typography
                  variant="subtitle2"
                  className={classes.regSpan}
                  component="span"
                >
                  Reply to
                </Typography>
                <Typography variant="subtitle2" component="span">
                  <strong>
                    Ticketmaster
                    <span className={classes.regSpan}>
                      noreply@ticketmaster.com
                    </span>
                  </strong>
                </Typography>
              </div>

              <div className={classes.eD}>
                <Typography
                  variant="subtitle2"
                  className={classes.regSpan}
                  component="span"
                >
                  To
                </Typography>
                <Typography variant="subtitle2" component="span">
                  <span className={classes.regSpan}>{user}</span>
                </Typography>
              </div>

              <div className={classes.eD}>
                <Typography
                  variant="subtitle2"
                  className={classes.regSpan}
                  component="span"
                >
                  Date
                </Typography>
                <Typography variant="subtitle2" component="span">
                  <strong style={{ lineHeight: "10px" }}>
                    26 Mar 2024, <br /> 11:34 PM
                  </strong>
                </Typography>
              </div>

              <div className={classes.eD}>
                <Typography
                  variant="subtitle2"
                  className={classes.regSpan}
                  component="span"
                >
                  <LockIcon />
                </Typography>
                <Typography variant="subtitle2" component="span">
                  <strong style={{ lineHeight: "10px" }}>
                    Standard encryption (TLS) <br />
                    <Link className={classes.gg}>Learn more</Link>{" "}
                  </strong>
                </Typography>
              </div>
            </Paper>
          </Collapse>
        </Box>
        <Box mt={5}>
          <Divider className={classes.divider} />
          <div className={classes.heading}>
            <img src={Ticketmaster} alt="logo" className={classes.img} />

            <div className={classes.user}>
              <IconButton
                className={classes.link}
                edge="start"
                aria-label="user"
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
              <Typography variant="body1">
                <strong>My Account</strong>
              </Typography>
            </div>
          </div>

          <Box mt={2}>
            <img
              src={OrderNumber}
              className={classes.orderImg}
              alt="ordernumber"
            />
            <img
              src={image}
              style={{ marginTop: "-8px" }}
              className={classes.orderImg}
              alt="ticketImg"
            />
          </Box>

          <Box mt={3} px={2}>
            <Typography variant="h5" color="initial">
              <strong>{name}</strong>
            </Typography>
          </Box>
          <Box px={2} mt={2}>
            <div className={classes.flexD}>
              <TodayOutlinedIcon />
              <Typography
                variant="body1"
                className={classes.flexDInfo}
                color="initial"
              >
                {emailInfo.date}
              </Typography>
            </div>

            <div className={classes.flexD}>
              <LocationOnOutlinedIcon />
              <Typography
                variant="body1"
                className={classes.flexDInfo}
                color="initial"
              >
                {emailInfo.location}
              </Typography>
            </div>

            <div className={classes.flexD}>
              <ConfirmationNumberOutlinedIcon />
              <div>
                {seatMap.map((d, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    className={classes.flexDInfo}
                    color="initial"
                  >
                    {`SEC ${d.sec}, ROW ${d.row} ${
                      d.seat !== "-" ? "SEAT " + d.seat : ""
                    }`}
                  </Typography>
                ))}
              </div>
            </div>

            <Box mt={2}>
              <Button
                variant="contained"
                className={classes.btn}
                color="inherit"
                fullWidth
              >
                View Mobile Ticket
              </Button>
            </Box>
          </Box>
        </Box>

        <Box my={4}>
          <Typography variant="h6" color="initial" gutterBottom>
            Important Information
          </Typography>
          <Alert className={classes.alert} severity="info">
            <AlertTitle>Important Event Info</AlertTitle>
            NO REFUNDS, EXCHANGES OR CANCELATIONS.{" "}
            <Link className={classes.link}>
              Click here for Park and Ride or Shuttle tickets.
            </Link>
          </Alert>
        </Box>

        <Box style={{ background: "#ebebeb" }} py={2} px={2}>
          <Typography variant="body1" color="initial" component="p">
            <strong>Please Note: </strong>
            As official health guidelines evolve regarding COVID-19 safety
            protocols, the venue may shift seating configurations and increase
            capacity.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};
export default EmailConfirmation;
