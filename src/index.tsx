import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from './graphql/apollo-client';
import {Page} from './components/page';
import App from './App';
// import '@cloudscape-design/global-styles/index.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient} >
      <Page>
        <App />
      </Page>
    </ApolloProvider>
  </React.StrictMode>
);
