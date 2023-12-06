import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

const IndexScreen = () => {
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [redirectDashboard, setRedirectDashboard] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setRedirectDashboard(true);
    } else {
      setRedirectLogin(true);
    }
  }, []);

  return (
    <div>
      {redirectLogin ? <Redirect to='/home' /> : null}
      {redirectDashboard ? <Redirect to='/profile' /> : null}
    </div>
  );
};

export default IndexScreen;
