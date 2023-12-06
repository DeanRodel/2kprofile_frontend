import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PricingElement from '../components/Home/Pricing';

const Pricing = (props) => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      axios.get('/api/players/profile').then((res) => {
        props.setPlayer(res.data);
      });
    }
  }, []);

  function upgradeAccount(tier) {
    const body = { tier: tier };
    axios.put('/api/players/upgradeAccount', body).then((res) => {
      setSuccess(res.data);
    });
  }

  function startTrial() {
    axios
      .put('/api/players/startTrial')
      .then((res) => {
        setSuccess(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split('Error: ')[1];
          const serverError = error.split('<br>')[0];
          setError(serverError);
        } else console.log(err);
      });
  }

  return <PricingElement {...props} />;
};

export default Pricing;
