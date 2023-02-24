import React from "react";
import Layout from "../components/Layout";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  next: { background: "#eeeeee", padding: "8px 12px" },
  btn: {
    background: "#026AE1",
    color: "white",
  },
}));

const Transferred = ({ time, info }) => {
  const classes = useStyles();

  const { clientName, success, tix } = info;

  const hours = 24;

  return (
    <Layout time={time}>
      <Box mt={10} mb={3}>
        <Alert severity={success ? "success" : "error"}>
          {success ? "Send Complete" : "Send Error"}
        </Alert>
      </Box>
      <Container>
        <Box mb={3}>
          <Typography gutterBottom variant="h6" color="initial">
            {success ? "You Are All Set" : "Transfer Not Processed"}
          </Typography>
          <Typography variant="body1" color="initial" component="p">
            {success
              ? `There are now ${tix} ticket(s) heading to ${clientName}, We'll notify you
            with an email about your transfer. Once ${clientName} accepts and claim the
            ticket, your original tickets will no longer be valid.`
              : `            These tickets are not SOLO tickets as they share one barcode. Can
            only be sent to ${clientName} as a pair of linked tickets.`}
          </Typography>
        </Box>
        <Box my={2} className={classes.next}>
          <Typography gutterBottom variant="h6" color="initial">
            What's next
          </Typography>
          <Typography variant="body2" color="initial">
            Once {clientName} accepts ticket transfer the original will no
            longer be valid. Just incase something changes, you can cancel your
            ticket transfer request as long as the tickets have not been
            accepted. Tickets will be active in recievers wallet in {hours}{" "}
            hours due to important event changes.
          </Typography>
        </Box>

        <Button className={classes.btn} fullWidth>
          Done
        </Button>
      </Container>
    </Layout>
  );
};

export default Transferred;
