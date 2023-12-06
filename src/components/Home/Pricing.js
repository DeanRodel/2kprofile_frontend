import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CheckboxW from '../../img/Home/icons/checkbox-white.png';
import CheckboxB from '../../img/Home/icons/checkbox-black.png';
import CheckboxR from '../../img/Home/icons/checkbox-red.png';
import CheckboxG from '../../img/Home/icons/checkbox-green.png';
import background from '../../img/Home/bgPricing.jpg';
import { Redirect } from 'react-router';

const Pricing = (props) => {
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [redirectPayment, setRedirectPayment] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [period, setPeriod] = useState('Monthly');
  const [silverPrice, setSilverPrice] = useState('9.97');
  const [goldPrice, setGoldPrice] = useState('14.97');
  const [platinumPrice, setPlatinumPrice] = useState('19.97');


  function changePeriod() {
    if (period === 'Monthly') {
      setPeriod('Yearly');
      setSilverPrice('99.70');
      setGoldPrice('149.70');
      setPlatinumPrice('199.70');
    } else {
      setPeriod('Monthly');
      setSilverPrice('9.97');
      setGoldPrice('14.97');
      setPlatinumPrice('19.97');
    }
  }

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
    let token = localStorage.getItem('jwtToken');
    if (!token) {
      setRedirectLogin(true);
      return;
    }
    let item = '';

    if (tier === 'Silver') {
      if (period === 'Monthly') {
        item = 'price_1IiYbiHFO4iy8rqGT0dCycEZ';
      } else {
        item = 'price_1IiYbiHFO4iy8rqGphBwr7Ym';
      }
    } else if (tier === 'Gold') {
      if (period === 'Monthly') {
        item = 'price_1IiYblHFO4iy8rqGo1hYgzd6';
      } else {
        item = 'price_1IiYblHFO4iy8rqGmYgmnHWH';
      }
    } else if (tier === 'Platinum') {
      if (period === 'Monthly') {
        item = 'price_1IiYbtHFO4iy8rqG0kIzrugr';
      } else {
        item = 'price_1IiYbtHFO4iy8rqGf5XO1Qjw';
      }
    }
    let body = { priceId: item };

    if (props.location.state) {
      axios
        .put(
          `/api/teams/${props.location.state.teamId}/createCheckoutSession`,
          body
        )
        .then((res) => {
          window.open(res.data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put('/api/players/createCheckoutSession', body)
        .then((res) => {
          window.open(res.data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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

  if (redirectPayment !== '') {
    return (
      <Redirect to={`/payment?tier=${redirectPayment}?period=${period}`} />
    );
  }

  if (redirectLogin) {
    return (
      <Redirect to={{ pathname: '/login', state: { redirectPricing: true } }} />
    );
  }


  const bgImage = {
    backgroundImage: `url(${background})`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'inset 0 0 15px 10px black'
  }

  return (
    <div className='w-full pb-16 h-auto' style={bgImage}>
      <p className='font-black font-head md:text-4xl text-2xl tracking-widest pb-8 text-center text-white'>
        PRICING
      </p>
      <div className='flex justify-center pb-10'>
        <p className='text-gray-300 font-body text-ms pr-2'>Monthly</p>
        <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in align-center'>
          <input
            type='checkbox'
            name='toggle'
            id='toggleProfileCard'
            className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
            onChange={changePeriod}
          />
          <label
            htmlFor='toggle'
            className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
          ></label>
        </div>
        <p className='text-gray-300 font-body text-ms'>Yearly</p>
      </div>

      <div className='flex flex-col sm:flex-row justify-center mb-6 pb-2 sm:mb-0 mx-7'>
        <div className='sm:mx-0 mx-4 sm:flex-1 lg:flex-initial lg:w-1/6 rounded-t-lg border-red-500 bg-white mt-4 flex flex-col shadow-2xl transition duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-110 scale-0'>
          <div className='px-8 pt-10 text-baze font-bold text-center'>
            BRONZE
          </div>
          <div className='px-8 pb-4 text-baze font-bold text-center'>
            COLLECTOR CARD
          </div>
          <p className='lg:text-3xl text-2xl tracking-wider font-normal text-center'>
            FREE{' '}
          </p>
          <p className='text-xs text-center pt-1 pb-3'>{period} / USD</p>
          <div className='text-sm flex-grow mb-5 mx-auto pt-3'>
            <div className='font-body'>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Digital Collector Card</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Profile Picture</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Discord</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Game Stats​</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Biography</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Contact Me</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>Social Media Links</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>Media Gallery</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>Roster (Team only)</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>Live Streaming </p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>eCommerce</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>Sponsors Section</p>
              </div>
            </div>
          </div>
          <div className='flex mb-4 '>
            <button
              href='#'
              className=' self-center font-oswald mx-auto bg-red-700 w-4/5 h-9 text-white tracking-widest font-thin sm:mb-3 hover:bg-white border-red-600 border-2 hover:text-red-700'
              onClick={() => upgradeAccount('Bronze')}
            >
              START NOW
            </button>
          </div>
        </div>
        <div className='sm:ml-3 ml-4 sm:mr-0 mr-4 sm:flex-1 lg:flex-initial lg:w-1/6 rounded-t-lg border-red-500 bg-white mt-4 flex flex-col shadow-2xl transition duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-110 scale-0'>
          <div className='px-8 pt-10 text-baze font-bold text-center'>
            SILVER
          </div>
          <p className='lg:text-3xl pt-10 text-2xl tracking-wider font-normal text-center'>
            ${silverPrice}
          </p>
          <p className='text-xs text-center pt-1 pb-3'>{period} / USD</p>
          <div className='text-sm flex-grow  mx-auto pt-3'>
            <div className='text-center text-gray-500 font-body'>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Digital Collector Card</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Profile Picture</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Discord</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Game Stats​</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Biography</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Contact Me</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Social Media Links</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Media Gallery</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Roster (Team only)</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>Live Streaming </p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>eCommerce</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxR}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>Sponsors Section</p>
              </div>
            </div>
          </div>
          <div className='flex mb-4 sm:mt-0 mt-6'>
            <button
              href='#'
              className='self-center font-oswald mx-auto bg-red-700 w-4/5 h-9 text-white tracking-widest font-thin sm:mb-3 hover:bg-white border-red-600 border-2 hover:text-red-700'
              onClick={() => upgradeAccount('Silver')}
            >
              START NOW
            </button>
          </div>
        </div>

        <div className='ml-3  sm:mr-0 mr-1 sm:mt-0 mt-2 flex-1 lg:flex-initial lg:w-1/6 rounded-t-lg bg-pricing bg-right-top bg-no-repeat bg-mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col hover:scale-110 transition duration-500 ease-in-out  sm:transform transform-none sm:hover:scale-110 scale-0 -mb-5'>
          <div className='px-8 pt-10 text-base font-bold text-center text-white'>
            GOLD
          </div>
          <p className='lg:text-3xl pt-16 text-2xl tracking-wider font-normal text-center text-white'>
            ${goldPrice}
          </p>
          <p className='text-xs text-center pt-1 text-white pb-5'>
            {period} / USD
          </p>
          <div className='text-sm flex-grow mx-auto pt-3 text-white'>
            <div className='text-center font-body text-white'>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Digital Collector Card</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Profile Picture</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Discord</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Game Stats​</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Biography</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Contact Me</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Social Media Links</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Media Gallery</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Roster (Team only)</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxW}
                  alt='included'
                ></img>
                <p className='text-white'>Live Streaming </p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxB}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>eCommerce</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxB}
                  alt='not included'
                ></img>
                <p className='text-gray-500 line-through'>Sponsors Section</p>
              </div>
            </div>
          </div>
          <div className='flex mb-9 pr-2 sm:mt-0 mt-6'>
            <button
              href='#'
              className='self-center font-oswald mx-auto bg-white w-4/5  h-9 text-black tracking-widest font-thin sm:mb-3 hover:bg-red-700 hover:text-white'
              onClick={() => upgradeAccount('Gold')}
            >
              START NOW
            </button>
          </div>
        </div>

        <div className='sm:mx-0 mx-4 sm:mt-4 mt-8 sm:flex-1 lg:flex-initial lg:w-1/6 rounded-t-lg border-red-500 bg-white flex flex-col shadow-2xl transition duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-110 scale-0'>
          <div className=' px-8 pt-10 text-baze font-bold text-center'>
            PLATINUM
          </div>
          <p className='lg:text-3xl pt-10 text-2xl tracking-wider font-normal text-center'>
            ${platinumPrice}
          </p>
          <p className='text-xs text-center pt-1 pb-3'>{period} / USD</p>
          <div className='text-sm flex-grow mx-auto pt-3'>
            <div className='text-center text-gray-500 font-body'>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Digital Collector Card</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Profile Picture</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Discord</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Game Stats​</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Biography</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Contact Me</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Social Media Links</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Media Gallery</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Roster (Team only)</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Live Streaming </p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>eCommerce</p>
              </div>
              <div className='flex pb-1'>
                <img
                  className='w-4 h-4 mr-1'
                  src={CheckboxG}
                  alt='included'
                ></img>
                <p className='text-gray-900'>Sponsors Section</p>
              </div>
            </div>
          </div>
          <div className='flex mb-4 sm:mt-0 mt-6'>
            <button
              href='#'
              className='self-center font-oswald mx-auto bg-red-700 w-4/5 h-9 text-white tracking-widest font-thin sm:mb-3 hover:bg-white border-red-600 border-2 hover:text-red-700'
              onClick={() => upgradeAccount('Platinum')}
            >
              START NOW
            </button>
          </div>
          {success !== '' ? (
            <label className='w-full bg-green-300 px-5 py-3 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-green-400'>
              {success}
            </label>
          ) : null}
          {error !== '' ? (
            <label className='w-full bg-red-300 px-5 py-3 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-red-400'>
              {error}
            </label>
          ) : null}
        </div>
      </div>
      <p className='text-center mx-7 font-body text-xs pt-10 text-white'>
        Each free Collector Card becomes part of{' '}
        <font className='text-red-600 font-bold'>ePleyer's</font> Searchable
        Database
      </p>
    </div>
  );
};

export default Pricing;
