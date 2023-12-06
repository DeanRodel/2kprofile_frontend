import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import FormContainer from '../components/FormContainer';
import IconEmail from '../img/LoginPage/email.png';
import IconPassword from '../img/LoginPage/password.png';

import '../App.css';

const LoginScreen = (props) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [redirect, setRedirect] = useState(false);
  const [redirectPricing, setRedirectPricing] = useState(false);
  const [learnMore, setLearnMore] = useState(false);

  let anyError = false;
  const [errorField, setError] = useState({
    emailError: '',
    passwordError: '',
  });

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute reCAPTCHA not yet available');
      return;
    }
    return await executeRecaptcha('login_page');
    // setRecaptchaToken(token);
  }, [executeRecaptcha]);

  const validation = () => {
    if (email === '') {
      setError((prev) => ({
        ...prev,
        emailError: 'Please fill out this field.',
      }));
      anyError = true;
    }

    if (password === '') {
      setError((prev) => ({
        ...prev,
        passwordError: ' Please fill out this field.',
      }));
      anyError = true;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const recaptchaToken = await handleReCaptchaVerify();
    validation();
    const loginData = {
      email: email,
      password: password,
      recaptchaToken,
    };
    if (!anyError) {
      axios
        .post('/api/players/login', loginData)
        .then((response) => {
          const { token } = response.data;
          localStorage.setItem('jwtToken', token);
          if (props.location.state) {
            setRedirectPricing(true);
          } else {
            setRedirect(true);
          }
          props.setIsLoggedIn(true);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const error = err.response.data.split('Error: ')[1];
            const serverError = error.split('<br>')[0];
            setError({ passwordError: serverError });
          } else console.log(err);
        });
    }
  };

  return (
    <div className='w-full'>
      {(redirect || props.isLoggedIn) && <Redirect to='/dashboard' />}
      {redirectPricing ? <Redirect to='/pricing' /> : null}
      {learnMore && <Redirect to='/about' />}
      <FormContainer>
        <div className='sm:flex flex-row mt-8 justify-center '>
          <form
            className='sm:w-96 max-w-sm bg-white shadow-xl rounded px-8 pt-14 pb-14 mb-4 sm:mx-0 mx-7'
            onSubmit={submitHandler}
          >
            <p className='block font-body font-medium pb-14 text-center'>
              Login to Your Account
            </p>
            <div className='flex border-b border-gray-400'>
              <img
                className='w-7 h-6 p-1 my-auto'
                src={IconEmail}
                alt='email'
              ></img>
              <input
                className="text-sm font-body appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none @error('email') border-red-500 @enderror"
                id='email'
                type='email'
                placeholder='Enter Email or Username'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  anyError = false;
                  setError((prev) => ({ ...prev, emailError: '' }));
                }}
              ></input>
            </div>
            <div className='h-8'>
              <p className='text-red-500 text-xs italic mb-0'>
                {errorField.emailError}
              </p>
            </div>
            <div className='flex border-b border-gray-400'>
              <img
                className='w-7 h-7   p-1 my-auto'
                src={IconPassword}
                alt='password'
              ></img>
              <input
                className='text-sm font-body appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                id='password'
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  anyError = false;
                  setError((prev) => ({ ...prev, passwordError: '' }));
                }}
              ></input>
            </div>
            <div className='h-7 mb-3'>
              <p className='text-red-500 text-xs italic mb-0'>
                {errorField.passwordError}
              </p>
            </div>
            <div className='flex justify-between pb-7'>
              <div className='flex'>
                <input className='' id='rememberMe' type='checkbox'></input>
                <p className='pl-2 font-body text-xs text-gray-400'>
                  Remember Me
                </p>
              </div>
              <Link
                to={'/forgotPassword'}
                className='pr-4 font-body text-xs text-gray-400 hover:underline hover:text-blue-400 '
              >
                Forgot Password
              </Link>
            </div>
            <div className='flex justify-center'>
              <button
                className='w-56 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline'
                type='submit'
              >
                LOGIN
              </button>
            </div>
            <div className='flex flex-rows pt-6 justify-center'>
              <Link
                to={'/policy'}
                className='text-gray-700 hover:text-blue-400 hover:underline font-body text-xs'
              >
                Privacy Policy
              </Link>
            </div>
            <div className='flex flex-rows justify-center pt-2'>
              <Link
                to={'/register'}
                className=' text-center text-gray-700 hover:text-blue-400 hover:underline font-body text-xs'
              >
                New User? Click Here to Register
              </Link>
            </div>
            <div className='flex flex-rows justify-center pt-2'>
              <Link
                to={'/pricing'}
                className=' text-center text-gray-700 hover:text-blue-400 hover:underline font-body text-xs'
              >
                Back to all sign up options
              </Link>
            </div>
          </form>
        </div>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
