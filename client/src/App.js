import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Launches from './components/Launches';
import Launch from './components/Launch';

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
        <Router>
          <div className="container">
            <img src={logo} alt="logo" />
            <Route exact path="/" component={ Launches } />
            <Route path="/launch/:flight_number" component={ Launch } />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
