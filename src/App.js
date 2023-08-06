import { Switch, Route, Redirect } from "react-router-dom";
import MyEvent from "./pages/MyEvent";
import Ticket from "./pages/Ticket";
import EmailConfirmation from "./pages/EmailConfirmation";
import Transferred from "./pages/Transferred";
import FeePage from "./pages/FeePage";

import Tswift from "./assets/Tswift.jpg";
// import bts from "./assets/bts.jpg";

const time = "12 :24";
const events = {
  name: "Taylor Swift | The Eras Tour",
  // name: "BTS Permission To Dance On Stage - LA",
  
  title: "TaylorSwiftTix Presale powered by Verified Fan",
  // title: "BTS ARMY Verified Fan General Presale",

  image: Tswift,
  // image: bts,

  // user info/client info --- email with your name on it
  user: "daniskascott@gmail.com",

  // fee & transfer info
  success: true,
  userName: "Daniska",
  clientName: "Buyer-name(buyer-email@gmail.com)",
  taxFee: 100 ,
  paid: true,
  // number of tickets
  tix: 4 ,

  // edit here to change ticket state
  // if you edit the state also update
  // the email confirmation below
  date: "Tue , Aug 08, 6:30pm • SoFi Stadium",
  emailInfo: {
    date: "Tue • Aug 08, 2023 • 6:30 PM",
    location: "SoFi Stadium",
  },

  // screen record countdown
  // Format "MM DD YY, h:mm a
     countdown: "08 15 2022, 08:00pm",
  // Edit here to change seating positison
  seatMap: [
    {
      sec: "506",
      row: "7",
      seat: "7",
    },
    {
      sec: "506",
      row: "7",
      seat: "8",
    },
    /*
      sec: "544",
      row: "20",
      seat: "20",
    },
    {
      sec: "544",
      row: "20",
      seat: "21",
    */,
  ],
};

function App() {
  return (
    <Switch>
      <Route
        path="/myevent"
        render={(routeProps) => <MyEvent events={events} {...routeProps} />}
      />
      <Route
        path="/ticket"
        render={(routeProps) => (
          <Ticket info={events} {...routeProps} time={time} />
        )}
      />
      <Route
        path="/email"
        render={(routeProps) => (
          <EmailConfirmation {...routeProps} info={events} time={time} />
        )}
      />

      <Route
        path="/transfer"
        render={(routeProps) => (
          <Transferred info={events} time={time} {...routeProps} />
        )}
      />

      <Route
        path="/fee"
        render={(routeProps) => (
          <FeePage {...routeProps} info={events} time={time} />
        )}
      />
      {/* add a Redirect component to redirect to the "Ticket" page */}
      <Redirect exact from="/" to="/ticket" />
    </Switch>
  );
}

export default App;
