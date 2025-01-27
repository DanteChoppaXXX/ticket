import React from "react";
import Layout from "../components/Layout";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
//import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import RefreshIcon from '@material-ui/icons/Refresh';
import ImgCard from "../components/ImgCard";
import {useHistory} from "react-router-dom";
//import PropTypes from 'prop-types';

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
    marginLeft: "0px",
    fontSize: "1.1rem",
    fontWeight: 400,
    marginTop: "10px",
  },
  refreshButton: {
    color: "#fff",
  },
  container: {
    
}
}));

const MyEvent = ({ events }) => {
  const classes = useStyles();
  const history = useHistory();
  
  const handleRefresh = () => history.push("/myevent");
  return (
    <Layout>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            My Events
          </Typography>
        <div className={classes.grow} />
        </Toolbar>
      </AppBar>

      <Box mt={4} >
        <Box my={2} className={classes.container}>
          <ImgCard {...events} />
        </Box>
      </Box>


    </Layout>
  );
};


export default MyEvent;
