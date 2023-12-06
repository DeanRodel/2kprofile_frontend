import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Subscription = ({ player }) => {
  const [renew, setRenew] = useState('');
  const [status, setStatus] = useState('');
  const [trialExpire, setTrialExpire] = useState('');
  const [isTeam, setIsTeam] = useState(false);

  function getInfo(player) {
    if (player.stripe.id) {
      let expireDate = new Date(player.stripe.current_period_end * 1000);
      let expire = JSON.stringify(expireDate);
      expire = expire.split('T')[0];
      expire = expire.split('"')[1];
      setRenew(expire);
      if (player.stripe.cancel_at_period_end) {
        setStatus('Cancelled');
      } else {
        setStatus('Renew');
      }
    }
    if (player.membership.expire) {
      let expire = JSON.stringify(player.membership.expire);
      expire = expire.split('T')[0];
      expire = expire.split('"')[1];
      setTrialExpire(expire);
    }
    if (player.teamProfile) setIsTeam(true);
  }

  function openPortal() {
    if (player.teamProfile) {
      axios
        .put(`/api/teams/${player._id}/createCustomerPortalSession`)
        .then((res) => {
          window.open(res.data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    axios
      .put('/api/players/createCustomerPortalSession')
      .then((res) => {
        window.open(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getInfo(player);
  }, []);

  return (
    <div
      className='w-full sm:flex-col grid-rows justify-center bg-cobe md:pt-14 pt-10 sm:px-40'
      id='Subscription'
    >
      <div className='sm:flex-row flex-none sm:justify-start justify-center w-full'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-10 text-white font-head tracking-widest sm:text-left text-center'>
          Subscription
        </h5>
      </div>
      <div className='grid sm:grid-cols-2 grid-rows-1 px-10'>
        <div className='flex'>
          <p className='text-left font-body text-white sm:text-base text-xs'>
            Current Plan: &nbsp;
          </p>
          <p className='text-left font-body text-white sm:text-base text-xs'>
            {player.membership.tier} - &nbsp;
          </p>
          {status === 'Renew' ? (
            <>
              {renew !== '' ? (
                <p className='text-left font-body text-white sm:text-base text-xs'>
                  Renews on: {renew}
                </p>
              ) : null}
            </>
          ) : null}
          {status === 'Cancelled' ? (
            <p className='text-left font-body text-white sm:text-base text-xs'>
              Membership expires: {renew}
            </p>
          ) : null}
          {player.membership.trial === 'using' && status === '' ? (
            <p className='text-left font-body text-white sm:text-base text-xs'>
              Trial ends on: {trialExpire}
            </p>
          ) : null}
        </div>
        <div className=''>
          {player.stripe.customer ? (
            <button onClick={openPortal} className='float-right text-white'>
              Open Portal
            </button>
          ) : (
            <>
              {isTeam ? (
                <Link
                  to={{
                    pathname: `/pricing/${player.slug}`,
                    state: { teamId: player._id },
                  }}
                  className='float-right text-white'
                >
                  Change Plan
                </Link>
              ) : (
                <Link to='/pricing' className='float-right text-white'>
                  Change Plan
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
