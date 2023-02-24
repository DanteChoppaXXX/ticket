import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";

class Countdown extends Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const months = countdown.format("M") - 1;
      const daysInMonth = Number(months * 30);
      const days = Number(countdown.format("D"));
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days: daysInMonth + days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.time}>
          <Typography variant="h5" component="h2">
            {days > 350 ? "00" : days <= 9 ? `0${days}` : days}
          </Typography>
          <Typography variant="subtitle1" className={classes.wrapTime}>
            DAY
          </Typography>
        </div>
        <div className={classes.time}>
          <Typography variant="h5" component="h2">
            {hours}
          </Typography>
          <Typography variant="subtitle1" className={classes.wrapTime}>
            HOUR
          </Typography>
        </div>
        <div className={classes.time}>
          <Typography variant="h5" component="h2">
            {minutes}
          </Typography>
          <Typography variant="subtitle1" className={classes.wrapTime}>
            MIN
          </Typography>
        </div>
        <div className={classes.time}>
          <Typography variant="h5" component="h2">
            {seconds}
          </Typography>
          <Typography variant="subtitle1" className={classes.wrapTime}>
            SEC
          </Typography>
        </div>
      </div>
    );
  }
}

export default Countdown;
