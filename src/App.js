import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MyEvent from "./pages/MyEvent";
import Ticket from "./pages/Ticket";
import EmailConfirmation from "./pages/EmailConfirmation";
import Transferred from "./pages/Transferred";
import FeePage from "./pages/FeePage";
import Layout from './components/Layout';
import UpdateEventPage from './pages/UpdateEventPage';

import Tswift from "./assets/Tswift.jpg";
//import melanie from "./assets/melanie.jpg";

const time = "12 :24";
// const events = {
//   name: "Taylor Swift | The Eras Tour",
//   //name: "Melanie Martinez: The Trilogy Tour",
  
//   //title: "TaylorSwiftTix Presale powered by Verified Fan",
//   title: "Verified Resale Ticket",

//   image: Tswift,
//   //image: melanie,

//   // user info/client info --- email with your name on it
//   user: "daniskascott@gmail.com",

//   // fee & transfer info
//   success: true,
//   userName: "Daniska",
//   clientName: "Buyer-name(buyer-email@gmail.com)",
//   taxFee: 100 ,
//   paid: true,
//   // number of tickets
//   tix: 2 ,

//   // edit here to change ticket state
//   // if you edit the state also update
//   // the email confirmation below
  
//   //date: "Thu , Jun 13, 7:00pm • Nationwide Arena",
//   date: "Thu, Nov 21, 7pm • Rogers Center",
//   emailInfo: {
//     date: "Thu • Nov 21, 2024 • 7:00 PM",
//     location: "Rogers Center, Toronto, ON",
//   },

//   // screen record countdown
//   // Format "MM DD YY, h:mm a
//   countdown: "08 15 2022, 08:00pm",
//   // Edit here to change seating positison
//   seatMap: [
//     {
//       sec: "A3",
//       row: "10",
//       seat: "5",
//     },
//     {
//       sec: "A3",
//       row: "10",
//       seat: "6",
//     }
//     /*
//       sec: "544",
//       row: "20",
//       seat: "20",
//     },
//     {
//       sec: "544",
//       row: "20",
//       seat: "21",
//     */,
//   ],
// };

const App = () => {
  const initialEvent = JSON.parse(localStorage.getItem('events')) || {
    name: "Taylor Swift | The Eras Tour",
    title: "Verified Resale Ticket",
    image: Tswift, // Update with correct image path
    user: "example@gmail.com",
    success: true,
    userName: "Daniska",
    clientName: "Buyer-name(buyer-email@gmail.com)",
    taxFee: 100,
    paid: true,
    tix: 2,
    date: "Thu, Nov 21, 7pm • Rogers Center",
    emailInfo: {
    date: "Thu • Nov 21, 2024 • 7:00 PM",
    location: "Rogers Center, Toronto, ON",
    },
    countdown: "08 15 2022, 08:00pm",
    seatMap: [
    {
        sec: "A3",
        row: "10",
        seat: "5",
    },
    {
        sec: "A3",
        row: "10",
        seat: "6",
    },
    ],
  };

  const [events, setEvent] = useState(initialEvent)

  const handleEventUpdate = (updatedEvent) => {
    setEvent(updatedEvent);
    // Save the updated event to localStorage
    localStorage.setItem('events', JSON.stringify(updatedEvent));
};

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

          <Route
            path="/update-details"
            render={(routeProps) => (
              <UpdateEventPage onEventUpdate={handleEventUpdate} {...routeProps} />
            )}
          />
          {/* add a Redirect component to redirect to the "Ticket" page */}
          <Redirect to="/myevent" />
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
