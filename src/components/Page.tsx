import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProjectList } from "./ProjectList.jsx";
import { ProjectDetails } from "./ProjectDetails";

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
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
