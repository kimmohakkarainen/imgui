import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./menu";

import QueueView from "./queueview";

import "./styles.css";

/* 
          <Menu personName="Admin" role="ADMIN" />
          <Route exact path="/" component={QueueView} />
          <Route exact path="/projects" component={QueueView} />
          <Route exact path="/persons" component={QueueView} />
          <Route exact path="/person/summary" component={QueueView} />
          <Route exact path="/person/table" component={QueueView} />
*/
export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={QueueView} />
      </Router>
    </div>
  );
}
