import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePoll from "./pages/CreatePoll";
import LandingPage from "./pages/LandingPage";
import PollDetailView from "./pages/PollDetailView";
import _404 from "./pages/_404";
import _5xx from "./pages/_5xx";
import "./styles.css";

export default function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/polls/create">
          <CreatePoll />
        </Route>
        <Route path="/polls/:id">
          <PollDetailView />
        </Route>
        <Route path="/404">
          <_404 />
        </Route>
        <Route path="/500">
          <_5xx />
        </Route>
      </Switch>
    </Router>
  );
}
