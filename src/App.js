import { Switch, Route } from "react-router-dom";
import MyEvent from "./pages/MyEvent";
import Ticket from "./pages/Ticket";
import EmailConfirmation from "./pages/EmailConfirmation";
import Transferred from "./pages/Transferred";
import FeePage from "./pages/FeePage";

import Tswift from "./assets/Tswift.jpg";
// import bts from "./assets/bts.jpg";

const time = "12 :24";
const events = {
  name: "TAYLOR SWIFT|The ERAS TOUR",
  // name: "BTS Permission To Dance On Stage - LA",
  
  title: "Harry Styles Presale Powered by Ticketmas...",
  // title: "BTS ARMY Verified Fan General Presale",

  image: hslot,
  // image: bts,

  // user info/client info --- email with your name on it
  user: "amir.ash104@gmail.com",

  // fee & transfer info
  success: true,
  userName: "Silva",
  clientName: "Lauren(laureneleider@gmail.com)",
  taxFee: 100 ,
  paid: true,
  // number of tickets
  tix: 1 ,

  // edit here to change ticket state
  // if you edit the state also update
  // the email confirmation below
  date: "Thu , Oct 06, 8:00pm • United Center",
  emailInfo: {
    date: "Thu • Oct 06, 2022 • 8:00 PM",
    location: "United Center",
  },

  // screen record countdown
  // Format "MM DD YY, h:mm a
     countdown: "08 15 2022, 08:00pm",
  // Edit here to change seating positison
  seatMap: [
    {
      sec: "GAFLO5",
      row: "GA7",
      seat: "-",
    },
    {
      sec: "GAFLO5",
      row: "GA8",
      seat: "-",
    },
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
    </Switch>
  );
}

export default App;
