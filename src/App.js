import React from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header />
            <h1>I am chat page</h1>
          </Route>
          <Route path="/users"></Route>
          <Route path="/">
            <Header />
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// Header
// tinder cards
// buttons belew tinder cards

// chat screen
// individual chat screen
