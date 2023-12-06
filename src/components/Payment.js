import React, { useState, useEffect } from 'react';
// import bg from "../../img/Home/coming.png";
import Logo from '../img/logos/logo.png';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Loader from '../img/LoaderSmall.gif';

const Payment = ({ account, type }) => {
  const textFree = (
    <div>
      <p className='text-center font-body text-sm font-bold text-gray-600'>
        Shareble Digital Card
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Social Media Links
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Gamer Tag
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Profile Picture
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Games
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Teams
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        In-Game Position{' '}
      </p>
    </div>
  );
  const textSilver = (
    <div>
      <p className='text-center font-body text-sm font-bold text-gray-600'>
        Shareble Digital Card
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Social Media Links
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Gamer Tag
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Profile Picture
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Games
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Teams
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        In-Game Position{' '}
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Console Game Stats
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Achievements
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Media Gallery
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Personalized Bio
      </p>
    </div>
  );
  const textGold = (
    <div>
      <p className='text-center font-body text-sm font-bold text-gray-600'>
        Shareble Digital Card
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Social Media Links
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Gamer Tag
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Profile Picture
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Games
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Teams
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        In-Game Position{' '}
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Console Game Stats
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Achievements
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Media Gallery
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Personalized Bio
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Live Streaming
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Blog (Coming Soon)
      </p>
    </div>
  );
  const textPlatinum = (
    <div>
      <p className='text-center font-body text-sm font-bold text-gray-600'>
        Shareble Digital Card
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Social Media Links
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Gamer Tag
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Profile Picture
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Games
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Teams
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        In-Game Position{' '}
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Console Game Stats
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Achievements
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Media Gallery
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Personalized Bio
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Live Streaming
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Blog (Coming Soon)
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Ecommerce Store
      </p>
      <p className='text-center font-body text-sm font-medium text-gray-500'>
        Sponsors Section
      </p>
    </div>
  );
  const free = ['$0 / Mo', '$0 / Yr', '$0', '$0'];
  const silver = ['$9.97 / Mo', '$99.70 /Yr', '$9.97', '$99.70'];
  const gold = ['$14.97 / Mo', '$149.70 / Yr', '$14.97', '$149.70'];
  const platinum = ['$19.97 / Mo', '$199.70 / Yr', '$19.97', '$199.70'];

  const [success, setSuccess] = useState('month');
  const [plan, setPlan] = useState('GOLD');
  const [text, setText] = useState(textGold);
  const [price, setPrice] = useState(gold);
  const [total, setTotal] = useState(price[2]);

  let defaultTier, defaultPeriod;
  if (window.location.search !== '') {
    defaultTier = window.location.search
      .split('?tier=')[1]
      .split('?period=')[0];
    defaultPeriod = window.location.search
      .split('?tier=')[1]
      .split('?period=')[1];
  }

  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  const [isTeam, setIsTeam] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setPlan(document.getElementById('plan').value);
    if (document.getElementById('plan').value === 'GOLD') {
      setText(textGold);
      setPrice(gold);
    } else if (document.getElementById('plan').value === 'BRONZE - FREE') {
      setText(textFree);
      setPrice(free);
    } else if (document.getElementById('plan').value === 'SILVER') {
      setText(textSilver);
      setPrice(silver);
    } else if (document.getElementById('plan').value === 'PLATINUM') {
      setText(textPlatinum);
      setPrice(platinum);
    }
    if (success === 'month') {
      setTotal(price[2]);
    } else {
      setTotal(price[3]);
    }
    if (account.teamProfile) {
      setIsTeam(true);
    }
    if (window.location.search !== '') {
      let parseLocation = window.location.search.split('?tier=')[1];
      let tierPeriod = parseLocation.split('?period=');
      if (tierPeriod[0] === 'Platinum' && tierPeriod[1] === 'Yearly') {
        setText(textPlatinum);
        setPrice(platinum);
        setSuccess('year');
      }
    }
  }, [plan, success]);
  ////////
  const handleSubmitSub = async (item) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: email,
      },
    });
    setPaid(true);
    setLoading(true);

    if (result.error) {
      console.log(result.error.message);
      setError(result.error.message);
      setPaid(false);
      setLoading(false);
    } else {
      const token = localStorage.getItem('jwtToken');
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      let res;
      if (!isTeam) {
        res = await axios
          .post('/api/players/handleSubmitSub', {
            payment_method: result.paymentMethod.id,
            email: email,
            item: item,
          })
          .catch((err) => {
            const error = err.response.data.split('Error: ')[1];
            const serverError = error.split('<br>')[0];
            setPaid(false);
            setLoading(false);
            setError(serverError);
          });
      }
      if (isTeam) {
        res = await axios
          .post(`/api/teams/${account._id}/handleSubmitSub`, {
            payment_method: result.paymentMethod.id,
            email: email,
            item: item,
          })
          .catch((err) => {
            const error = err.response.data.split('Error: ')[1];
            const serverError = error.split('<br>')[0];
            setPaid(false);
            setLoading(false);
            setError(serverError);
          });
      }
      // eslint-disable-next-line camelcase
      if (res) {
        const { client_secret, status } = res.data;
        if (status === 'requires_action') {
          stripe.confirmCardPayment(client_secret).then(function (result) {
            if (result.error) {
              console.log(result.error);
              setLoading(false);
              // Display error message in your UI.
              // The card was declined (i.e. insufficient funds, card has expired, etc)
            } else {
              setLoading(false);
              // Show a success message to your customer
            }
          });
        } else {
          setLoading(false);
          // No additional information was needed
          // Show a success message to your customer
        }
      }
    }
  };

  const onClick = () => {
    let price;
    if (plan === 'SILVER') {
      if (success === 'month') {
        price = 'price_1IiYbiHFO4iy8rqGT0dCycEZ';
      } else {
        price = 'price_1IiYbiHFO4iy8rqGphBwr7Ym';
      }
    } else if (plan === 'GOLD') {
      if (success === 'month') {
        price = 'price_1IiYblHFO4iy8rqGo1hYgzd6';
      } else {
        price = 'price_1IiYblHFO4iy8rqGmYgmnHWH';
      }
    } else if (plan === 'PLATINUM') {
      if (success === 'month') {
        price = 'price_1IiYbtHFO4iy8rqG0kIzrugr';
      } else {
        price = 'price_1IiYbtHFO4iy8rqGf5XO1Qjw';
      }
    }

    if (account.stripe.status !== 'active') {
      handleSubmitSub(price);
    } else {
      setPaid(true);
      setLoading(true);
      let body = { price: price };
      const token = localStorage.getItem('jwtToken');
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      if (!isTeam) {
        axios.put('/api/players/changeSubscription', body).then((res) => {
          setLoading(false);
        });
      }
      if (isTeam) {
        axios
          .put(`/api/teams/${account._id}/changeSubscription`, body)
          .then((res) => {
            setLoading(false);
          });
      }
    }
  };

  return (
    <div className='bg-white-off mx-auto sm:h-screen h-auto'>
      <div className='sm:grid grid-cols-2 max-w-2xl mx-7 justify-center justify-items-center mx-auto pt-20 pb-40'>
        <div className='w-full flex justify-center'>
          <div className='w-full'>
            <img src={Logo} className='w-32 pt-5 mx-auto'></img>
            <p className='text-gray-500 font-head text-2xl font-black pt-7 text-center'>
              {plan}
            </p>
            <p className='text-gray-500 font-head text-2xl font-black text-center'>
              {' '}
              Plan
            </p>
            <p className='text-center pt-3 font-body text-xl text-red-700 font-semibold'>
              {price[2]}
              <font className='text-gray-400 font-normal'>/ Month</font>
            </p>
            <p className='text-center font-body text-sm font-medium text-gray-500 pb-8'>
              or {price[3]} / Year
            </p>
            <div> {text} </div>
          </div>
        </div>
        <div className='w-full flex justify-center bg-white sm:mt-0 mt-10'>
          {!paid ? (
            <div className='w-full mx-10'>
              <p className='font-semibold pt-16 font-body text-lg pb-6'>
                Choose Subscription
              </p>
              <select
                className='text-gray-600 md:text-base text-xs px-3 bg-white-off h-10 w-64 mb-5'
                defaultValue='GOLD'
                id='plan'
                onChange={() => setPlan('month')}
              >
                <option>BRONZE - FREE</option>
                <option>SILVER</option>
                <option>GOLD</option>
                <option>PLATINUM</option>
              </select>
              <div className='flex justify-between w-64 pb-10'>
                <div className='flex bg-white-off w-28 h-10'>
                  <input
                    className='my-auto mx-2'
                    type='radio'
                    name='periodSelect'
                    id='month'
                    onChange={() => setSuccess('month')}
                  />
                  <p className='text-gray-600 bg-white-off text-xs my-auto pt-1 font-body'>
                    {' '}
                    {price[0]}
                  </p>
                </div>
                <div className='flex bg-white-off w-28 h-10'>
                  <input
                    className='my-auto mx-2'
                    type='radio'
                    name='periodSelect'
                    id='year'
                    onChange={() => setSuccess('year')}
                  />
                  <p className='text-gray-600 bg-white-off text-xs my-auto pt-1 font-body'>
                    {' '}
                    {price[1]}
                  </p>
                </div>
              </div>
              <p className='font-semibold font-body text-lg pb-3'>
                Payment Information
              </p>
              <input
                className='text-gray-400 w-60 md:text-sm text-xs  px-3 mb-5 border-b-2'
                type='text'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className='border-b-2'>
                <CardElement />
              </div>
              <div className='flex justify-between w-60 font-semibold'>
                <p className='font-body text-lg pb-3'>Total Billed</p>
                <p className='font-body text-xl pb-3'>{total}</p>
              </div>
              <p
                className='text-center pt-4 text-gray-400 pb-3'
                style={{ fontSize: '0.55rem' }}
              >
                You will be charged now and monthly at this time when your
                account automatically renews. Cancel anytime.
              </p>
              {error !== '' ? (
                <p className='w-full mr-24 h-9 bg-red-300 pt-2 mb-4 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-red-400'>
                  {error}
                </p>
              ) : null}
              <div className='flex justify-center'>
                <button
                  className='font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin mt-4 mb-7 hover:bg-white border-red-600 border-2 hover:text-red-700'
                  onClick={onClick}
                >
                  UPGRADE
                </button>
              </div>
            </div>
          ) : (
            <div className='flex m-auto'>
              {loading ? (
                <img src={Loader} id='plan' style={{ maxHeight: '100px' }} />
              ) : (
                <div className='px-4'>
                  <p className='font-medium font-body text-lg pb-3'>
                    Your payment is successful. &nbsp;
                    {!isTeam ? (
                      <a href='/dashboard' className='underline text-blue-300'>
                        Click here
                      </a>
                    ) : (
                      <a
                        href={`/teamdashboard/${account.slug}`}
                        className='underline text-blue-300'
                      >
                        Click here
                      </a>
                    )}
                    &nbsp; to return to your dashboard.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
