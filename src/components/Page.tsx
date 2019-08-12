import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectList from "./ProjectList";
import { ProjectDetails } from "./ProjectDetails";
import Login from "./Login";

export default class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ProjectList} />
              <Route path="/projectDetail" component={ProjectDetails} />
              <Route path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}
