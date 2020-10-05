import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePoll from "./components/CreatePoll";
import PollDetailView from "./components/PollDetailView";
import _404 from "./components/_404";
import _5xx from "./components/_5xx";
import Mock from "./Mock";
import "./styles.css";

export default function App() {
  const dev = false;
  return dev ? (
    <Mock />
  ) : (
    <Router>
      <Switch>
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
