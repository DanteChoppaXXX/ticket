import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MyEvent from "./pages/MyEvent";
import Ticket from "./pages/Ticket";
import EmailConfirmation from "./pages/EmailConfirmation";
import Transferred from "./pages/Transferred";
import FeePage from "./pages/FeePage";
import Layout from './components/Layout';

import Tswift from "./assets/Tswift.jpg";
// import melanie from "./assets/melanie.jpg";

const time = "12 :24";
const events = {
  name: "Taylor Swift | The Eras Tour",
  // name: "Melanie Martinez: The Trilogy Tour",
  
  title: "TaylorSwiftTix Presale powered by Verified Fan",
  // title: "Verified Resale Ticket",

  image: Tswift,
  // image: melanie,

  // user info/client info --- email with your name on it
  user: "daniskascott@gmail.com",

  // fee & transfer info
  success: true,
  userName: "Daniska",
  clientName: "Buyer-name(buyer-email@gmail.com)",
  taxFee: 100 ,
  paid: true,
  // number of tickets
  tix: 2 ,

  // edit here to change ticket state
  // if you edit the state also update
  // the email confirmation below
  date: "Thu , Jun 13, 7:00pm • Nationwide Arena",
  emailInfo: {
    date: "Thu • Jun 13, 2024 • 7:00 PM",
    location: "Nationwide Arena",
  },

  // screen record countdown
  // Format "MM DD YY, h:mm a
     countdown: "08 15 2022, 08:00pm",
  // Edit here to change seating positison
  seatMap: [
    {
      sec: "103",
      row: "J",
      seat: "5",
    },
    {
      sec: "103",
      row: "J",
      seat: "6",
    }
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
    <Router>
      <Layout>
        <Switch>
          <Route
            path="/myevent"
            render={(routeProps) => (
            <MyEvent events={events} {...routeProps} />
          )}
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
      </Layout>
    </Router>

  );
}

export default App;
