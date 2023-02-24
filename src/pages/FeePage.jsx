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
  Card,
  CardContent,
} from "@material-ui/core";
import Progress from "../assets/transfer.png";
import FeePaid from "../assets/Fee-paid.png";
import Battery from "../assets/battery.png";
import Ticketmaster from "../assets/emaillogo.png";
import WifiIcon from "@material-ui/icons/Wifi";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Alert, AlertTitle } from "@material-ui/lab";
import SignalCellularAltOutlinedIcon from "@material-ui/icons/SignalCellularAltOutlined";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    background: "rgba(255,255,255,0.97)",
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
    color: "#494949",
  },
  btn: {
    backgroundColor: "#0560C9",
    color: "#fff",
  },
  alert: {
    border: "1px solid #8cbee7",
  },
}));

const FeeNote = ({ paid, taxFee, classes, hours }) => (
  <div>
    {paid ? (
      <div>
        <strong>NO RESALES!</strong>. This ticket transfer is now processing, If
        the recipient does not recieve the tickets in {hours} hours, it might be
        due to an error. All ticket rights are transferred to the new recipient
        once transfer is complete.{" "}
        <Link className={classes.link}>Click here for more info.</Link>
      </div>
    ) : (
      <div>
        <strong>NO RESALES!</strong>. This ticket was sold on presale, if
        transferred a tax fee of ${taxFee} is to be paid. All ticket rights are
        transferred to the new recipient once transfer is complete.{" "}
        <Link className={classes.link}>Click here for more info.</Link>
      </div>
    )}
  </div>
);

const FeePage = ({ time,info}) => {
  const classes = useStyles();

  const {
    image, name, emailInfo, seatMap, userName, clientName, paid, taxFee
  } = info

 
  const hours = 12;

 

  return (
    <div>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.appleIcons}>
            <span className={classes.time}>{time}</span>
            <div className={classes.signal}>
              <SignalCellularAltOutlinedIcon />
              <WifiIcon />
              <img src={Battery} alt="battery" className={classes.battery} />
            </div>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <IconButton
              edge="start"
              className={classes.backButton}
              aria-label="back"
            >
              <ArrowBackIosIcon />
            </IconButton>
            <div className={classes.emailIcon}>
              <IconButton edge="start" aria-label="archive">
                <ArchiveOutlinedIcon />
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
        <Box mt={10}>
          <Typography
            className={classes.mailreference}
            variant="subtitle1"
            color="initial"
          >
            <strong>
              {userName} <br /> Reply-To:
            </strong>
            Ticketmaster {"<"}
            <Link className={classes.link}>
              reply-fweo230539452fer3-31HTML-351942389-232450-54621@email.ticketmaster.com
            </Link>
            {">"}
          </Typography>
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

          <Box mt={4} textAlign="center">
            <Box mb={3}>
              <Typography variant="h6" color="initial">
                {paid
                  ? `${userName}, Your Ticket Transfer To ${clientName} Is Now Processing`
                  : `${userName}, Your Ticket Transfer To ${clientName} Is Pending!`}
              </Typography>
            </Box>
            <img
              src={paid ? FeePaid : Progress}
              style={{ marginTop: "-8px" }}
              alt="Progress"
            />
          </Box>

          <Box mt={4} mb={2}>
            <Alert className={classes.alert} severity="info">
              <AlertTitle>Important Event Info</AlertTitle>
              <FeeNote
                taxFee={taxFee}
                hours={hours}
                paid={paid}
                classes={classes}
              />
            </Alert>
          </Box>

          <Box mt={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h6" color="initial">
                  <strong>{name}</strong>
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  gutterBottom
                  style={{ textDecoration: "underline" }}
                >
                  {emailInfo.date}
                </Typography>
                <Typography variant="body1" color="initial">
                  {emailInfo.location}
                </Typography>

                <Divider style={{ margin: "16px 0px" }} />

                {seatMap.map((m, i) => (
                  <Typography key={i} variant="body1" color="initial">
                    <strong>{`SEC ${m.sec}, ROW ${m.row} ${m.seat !== "-"? "SEAT " + m.seat : ""}`}</strong>
                  </Typography>
                ))}
              </CardContent>
              <img src={image} alt="ticket" />

              <Box mt={3} mb={2} px={3}>
                <Button
                  variant="contained"
                  className={classes.btn}
                  color="inherit"
                  fullWidth
                >
                  View Mobile Ticket
                </Button>

                <Box mt={2}>
                  <Typography variant="body2" color="initial" component="p">
                    This email is <strong>NOT</strong> your ticket. You can see
                    the ticket in your Ticketmaster acount via the button above.
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default FeePage;
