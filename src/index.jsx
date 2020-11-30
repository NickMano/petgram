import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import { LoginContextProvider } from './context/LoginContext';

const client = new ApolloClient(
  { uri: 'https://petgram-server-nem.nickmano.vercel.app/graphql' },
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </ApolloProvider>,
  document.getElementById('app'),
);
