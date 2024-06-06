import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main';
import Reservation from './Resevation';
import LoginForm from "./login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Resevation" component={Reservation} />
        <Route path="/login" component={LoginForm}/>
      </Switch>
    </Router>
  );
}

export default App;
