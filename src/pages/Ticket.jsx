import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardMedia,
  Link,
  Button,
} from "@material-ui/core";
//import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import Close from "@material-ui/icons/Close";
// eslint-disable-next-line
import Countdown from "../components/Countdown";
import ver from "../assets/ver.png";
import Slider from "react-slick";
import Swipeable from "../components/Swipeable";
import { useHistory, Link as RouterLink } from "react-router-dom";
// eslint-disable-next-line
import AppleWallet from "../assets/Apple-wallet.png";

// STYLES
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#202731",
    marginTop: "0px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
    color: "#fff",
    marginLeft: "5px",
    fontSize: "1.1rem",
    fontWeight: 410,
    marginTop: "10px",
  },
  closeButton: {
    color: "#FFF",
  },
  card: {
    borderRadius: "16px",
  },
  ticketType: {
    backgroundColor: "#0560C9",
    color: "#fff",
    textAlign: "center",
    padding: "10px 5px",
  },
  name: {
    width: "70%",
    margin: "0px auto 5px",
  },
  section: {
    backgroundColor: "#026AE1",
    color: "#fff",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-around",
    padding: "32px 0",
  },
  seating: {
    textAlign: "center",
  },
  cardImage: {
    position: "relative",
  },
  bgImg: {
    height: 0,
    paddingTop: "56.25%",
    backgroundPosition: "top",
  },
  overlay: {
    background: "rgb(0,0,0)",
    // eslint-disable-next-line
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.8552338530066815) 28%, rgba(22,22,23,0.49888641425389757) 58%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  content: {
    position: "absolute",
    bottom: "10px",
    left: "0",
    textAlign: "center",
    color: "#fcfcfc",
    width: "100%",
  },
  container: {
    display: "fixed",
    marginTop: "30px",
    alignContent: "center",
    justifyContent: "space-around",
    marginBottom: "16px",
  },
  time: {
    fontWeight: 600,
  },
  wrapTime: {
    border: "1px solid #d5d0d0",
    padding: "4px",
    fontSize: "0.6rem",
  },
  link: {
    fontWeight: 550,
    marginTop: "16px",
    color: "#0078FF",
  },
  link1: {
    fontWeight: 500,
    marginTop: "8px",
    color: "#FFFFFF",
  },
  buttonM: {
    background: "#0560C9",
    display: "flex",
    justifyContent: "center",
    padding: "4px",
  },
  btnGroup: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
  },
  goodbtn: {
    background: "#026AE1",
    color: "#fff",
    padding: "12px 24px",
    textTransform: "capitalize",
    width: "45%",
  },
  badbtn: {
    background: "#EFF0F2",
    color: "#fff",
    padding: "12px 24px",
    textTransform: "capitalize",
    width: "45%",
  },
}));

const Ticket = ({ info, time }) => {
  const classes = useStyles();
  const history = useHistory();
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };

  const [open, setOpen] = useState(false);
// eslint-disable-next-line
  const { title, seatMap, countdown } = info;

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Layout time={time}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.closeButton}
            aria-label="close"
            onClick={() => history.push("/myevent")}
          >
            <Close />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            My Tickets
          </Typography>

          <Link
                  component={RouterLink}
                  className={classes.link1}
                  variant="body1"
                  to="/ticketdetails"
                >
                  Help
                </Link>

        </Toolbar>
      </AppBar>

      <Box mt={22} className={classes.container}>
        <Slider {...settings}>
          {seatMap.map((s) => (
            <Card key={s.sec} className={classes.card}>
              <Box className={classes.ticketType}>
                <Typography variant="subtitle4">{title}</Typography>
              </Box>
              <Box className={classes.section}>
                <div className={classes.seating}>
                  <Typography variant="subtitle6">SEC</Typography>
                  <Typography variant="subtitle6" component="h2">
                    {s.sec}
                  </Typography>
                </div>
                <div className={classes.seating}>
                  <Typography variant="subtitle6">ROW</Typography>
                  <Typography variant="subtitle6" component="h2">
                    {s.row}
                  </Typography>
                </div>
                <div className={classes.seating}>
                  <Typography variant="subtitle6">SEAT</Typography>
                  <Typography variant="subtitle6" component="h2">
                    {s.seat}
                  </Typography>
                </div>
              </Box>
              <Box className={classes.cardImage}>
                <CardMedia image={info.image} className={classes.bgImg} />

                <div className={classes.overlay}></div>
                <div className={classes.content}>
                  <Typography variant="body1" className={classes.name}>
                    {info.name}
                  </Typography>
                  <Typography variant="subtitle3" className={classes.sub}>
                    {info.date}
                  </Typography>
                  </div>
              </Box>
              <Box p={5} textAlign="center">
                {/*<Typography variant="body1">
                  Tickets will be ready in:
                </Typography>
                <Countdown
                  timeTillDate={countdown}
                  timeFormat="MM DD YYYY, h:mm a"
                  classes={classes} 
                /> */}
                <Typography variant="subtitle1" component="h3">LOWER LEVEL</Typography>
                {/* <img
                  src={AppleWallet}
                  alt={"app"}
                  style={{ margin: "4px auto", display: "block" }}
                /> */}
                <img
                  src={AppleWallet}
                  alt="app"
                  style={{ 
                    margin: "4px auto", 
                    display: "block", 
                    maxWidth: "100%", 
                    height: "auto", 
                    objectFit: "contain"
                  }}
                />

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    component="button"
                    className={classes.link}
                    variant="body2"
                  >
                  View Barcode
                  </Link>
                <Link
                  component={RouterLink}
                  className={classes.link}
                  variant="body2"
                  to="/ticketdetails"
                >
                  Ticket Details
                </Link>
                </div>
              </Box>
              <div className={classes.buttonM}>
                <img src={ver} alt="ver" />
              </div>
            </Card>
          ))}
        </Slider>

        <Box className={classes.btnGroup}>
          <Button
            variant="contained"
            className={classes.goodbtn}
            color="inherit"
            size="large"
            onClick={handleDrawerOpen}
          >
            Transfer
          </Button>
          <Button
            variant="contained"
            className={classes.badbtn}
            color="inherit"
            size="large"
          >
            Sell
          </Button>
        </Box>

        <Swipeable
          handleClose={handleDrawerClose}
          handleOpen={handleDrawerOpen}
          open={open}
        />
      </Box>
    </Layout>
  );
};

export default Ticket;
