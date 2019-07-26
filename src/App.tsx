import React, { Component } from "react";

import Page from "./components/Page";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-boost";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://127.0.0.1:8000/graphql"
});
const client = new ApolloClient({
  cache,
  link
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Page />
      </ApolloProvider>
    );
  }
}
