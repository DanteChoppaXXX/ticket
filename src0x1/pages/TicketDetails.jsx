import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

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
  ticketInfoContainer: {
    padding: theme.spacing(2),
    backgroundColor: "#f7f7f7",
  },
  barcode: {
    marginTop: theme.spacing(2),
  },
  orderInfo: {
    marginTop: theme.spacing(2),
  },
  terms: {
    marginTop: theme.spacing(2),
  },
}));

const TicketDetails = ({ ticketDetails }) => {
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
            Ticket Details
          </Typography>
        </Toolbar>
      </AppBar>

      <Box mt={18} className={classes.ticketInfoContainer}>
        <Typography variant="h6">{ticketDetails.Title}</Typography>
        <Typography>{`Date: ${ticketDetails.Date}`}</Typography>
        <Typography>{`Time: ${ticketDetails.Time}`}</Typography>

        <div className={classes.barcode}>
          <Typography variant="h6">Barcode Number</Typography>
          <Typography>{ticketDetails.BarcodeNumber}</Typography>
        </div>

        <div className={classes.orderInfo}>
          <Typography variant="h6">Order Number</Typography>
          <Typography>{ticketDetails.OrderNumber}</Typography>
          {/* Other ticket-related details */}
        </div>

        <div className={classes.terms}>
          <Typography variant="body2">
            {ticketDetails.TermsAndConditions}
          </Typography>
        </div>
      </Box>
    </Layout>
  );
};

TicketDetails.propTypes = {
  ticketDetails: PropTypes.object.isRequired,
};

export default TicketDetails;

