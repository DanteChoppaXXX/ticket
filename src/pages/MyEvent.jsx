import React from "react";
import Layout from "../components/Layout";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ImgCard from "../components/ImgCard";

// STYLES
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    marginTop: "57px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
    color: "#000",
    marginLeft: "-24px",
  },
  backButton: {
    color: "#000",
  },
}));

const MyEvent = ({ events }) => {
  const classes = useStyles();
  return (
    <Layout>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.backButton}
            aria-label="back"
          >
            <ArrowBackIosOutlinedIcon />
          </IconButton>

          <Typography variant="h5" className={classes.title}>
            My Event
          </Typography>
        </Toolbar>
      </AppBar>

      <Box mt={18}>
        {events.map((props, i) => (
          <Box key={i} my={2}>
            <ImgCard {...props} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default MyEvent;
