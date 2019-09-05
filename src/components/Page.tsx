import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProjectList } from "./ProjectList.jsx";
import { ProjectDetails } from "./ProjectDetails";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";

export default class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ProjectList} />
              <Route path="/projectDetail" component={ProjectDetails} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
