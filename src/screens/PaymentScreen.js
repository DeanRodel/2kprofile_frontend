import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentGateway from '../components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Loader from '../components/Loader';

const stripePromise = loadStripe('pk_test_XmXU72dwjgVJHk7yrwkkYMNv00bjYfPlG6');

const PaymentScreen = () => {
  const [player, setPlayer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authToken: `Bearer ${token}` };
    axios.get('/api/nav/playerDashboard').then((res) => {
      setPlayer(res.data.player);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Elements stripe={stripePromise}>
      <PaymentGateway account={player} type='player' />
    </Elements>
  );
};

export default PaymentScreen;
