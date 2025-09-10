import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';
import ReactGA from 'react-ga4';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Add Google Analytics integration
ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
