import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";

import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

// STYLES
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "24px",
  },
  media: {
    height: 185,
  },
  cardTitle: {
    fontSize: "0.95rem",
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  order: {
    marginTop: "-16px",
    paddingLeft: "8px",
    paddingBottom: "8px",
  },
  ticketdetails: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),

    "& > span": {
      color: "rgba(0, 0, 0, 0.34)",
      marginRight: theme.spacing(1),
    },
  },
}));

const TicketCard = ({ date, image, location, name, order }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            className={classes.cardTitle}
            component="h2"
          >
            {name}
          </Typography>
          <Box className={classes.ticketdetails}>
            <span>
              <CalendarTodayOutlinedIcon />
            </span>
            <Typography variant="body2">{date}</Typography>
          </Box>
          <Box className={classes.ticketdetails}>
            <span>
              <LocationOnOutlinedIcon />
            </span>
            <Typography variant="body2">{location}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography
          variant="subtitle2"
          className={classes.order}
          color="textSecondary"
        >
          {`Order ${order}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default TicketCard;
