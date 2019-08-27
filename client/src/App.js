import React from 'react';
import logo from './spacex-logo.png';
import './App.css';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch'
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: 'http://localhost:5000/graphql' });
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache })

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} className="spacex-logo" alt="logo" style={{ display: "block", width: "300px", margin: "auto" }} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
