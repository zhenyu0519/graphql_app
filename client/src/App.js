import React from 'react';
import logo from './spacex-logo.png';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Rockets from './components/Rockets';
import Rocket from './components/Rocket';

// const link = createHttpLink({ uri: 'http://localhost:5000/graphql' });
// const cache = new InMemoryCache();
// const client = new ApolloClient({ link, cache })

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} className="spacex-logo" alt="logo" style={{ display: "block", width: "400px", height: '200px', margin: "auto" }} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/rocket/:rocket_id" component={Rocket} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
