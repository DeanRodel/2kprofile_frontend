import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentGateway from '../components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Loader from '../components/Loader';

const stripePromise = loadStripe('pk_test_XmXU72dwjgVJHk7yrwkkYMNv00bjYfPlG6');

const TeamPaymentScreen = (props) => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authToken: `Bearer ${token}` };
    axios.get(`/api/nav/teamdashboard/${props.match.params.id}`).then((res) => {
      setTeam(res.data.team);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Elements stripe={stripePromise}>
      <PaymentGateway account={team} type='team' />
    </Elements>
  );
};

export default TeamPaymentScreen;
