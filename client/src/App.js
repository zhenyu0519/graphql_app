import React from 'react';
import logo from './spacex-logo.png';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Launches from './components/Launches'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} className="spacex-logo" alt="logo" style={{ display: "block", width: "300px", margin: "auto" }} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
