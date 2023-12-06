import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import GA4React from 'ga-4-react';
import axios from 'axios';

const ga4react = new GA4React('G-D885JVX5J1');

(async () => {
  try {
    await ga4react.initialize();
    axios.defaults.baseURL = 'https://twokprofile.onrender.com';
  } catch (e) {
    console.log('ga4react.initialize', e);
  }
  ReactDOM.render(
    <React.StrictMode>
      <GoogleReCaptchaProvider
        reCaptchaKey='6LdHXN0bAAAAAN_U54BhMYk4qOiramyIsm1R4baY'
        language='en'
      >
        <App />
      </GoogleReCaptchaProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
})();
