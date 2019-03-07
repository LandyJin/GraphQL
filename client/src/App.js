import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

import Launches from './components/Launches'

// Import Apollo 
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt="logo" />
          <Launches/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
