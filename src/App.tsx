import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectList from "./components/ProjectList";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProjectList} />
        </Switch>
      </BrowserRouter>
    );
  }
}
