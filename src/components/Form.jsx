import {
  Box,
  Container,
  Divider,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    padding: theme.spacing(1),
  },
  seat: {
    color: "grey",
  },
  btn: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  btnBack: {
    color: "#026AE1",
    marginLeft: "-10px",
  },
  btnTransfer: {
    background: "#026AE1",
    color: "white",
  },
}));

const CustomForm = () => {
  const classes = useStyles();

  const number = 4;
  const section = "506";
  const row = "5";
  const seat = "7 - 8";
  const section01 = "544";
  const row01 = "20";
  const seat01 = "20 - 21";

  return (
    <Box>
      <div className={classes.header}>
        <Typography variant="h6" color="initial">
          TRANSFER TICKETS
        </Typography>
      </div>
      <Divider />
      <Container>
        <Box my={2}>
          <Typography
            gutterBottom
            variant="body1"
            color="initial"
            component="p"
          >
            {number} Ticket(s) Selected
          </Typography>

          <Typography variant="body1" color="initial" component="p">
            <span className={classes.seat}>Sec</span> {section01}{" "}
            <span className={classes.seat}>Row</span> {row01}{" "}
            <span className={classes.seat}>Seat</span> {seat01}{" "}
            
          </Typography>
          <Typography variant="body1" color="initial" component="p">
            <span className={classes.seat}>Sec</span> {section}{" "}
            <span className={classes.seat}>Row</span> {row}{" "}
            <span className={classes.seat}>Seat</span> {seat}{" "}
            
          </Typography>
          
        </Box>
        <form>
          <Box mb={2}>
            <Typography gutterBottom variant="body2" color="initial">
              First Name
            </Typography>
            <TextField
              size="small"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <Typography gutterBottom variant="body2" color="initial">
              Last Name
            </Typography>
            <TextField
              size="small"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <Typography gutterBottom variant="body2" color="initial">
              Email or Mobile Number
            </Typography>
            <TextField
              size="small"
              label="Email or Mobile Number"
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <Typography gutterBottom variant="body2" color="initial">
              Note
            </Typography>
            <TextField size="small" variant="outlined" fullWidth />
          </Box>
        </form>

        <Box className={classes.btn}>
          <IconButton className={classes.btnBack}>
            <ArrowBackIosOutlinedIcon />
          </IconButton>
          <Button
            className={classes.btnTransfer}
            variant="contained"
            color="inherit"
          >
            Transfer {number} Ticket(s)
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomForm;