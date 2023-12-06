import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import FormContainer from '../components/FormContainer';
import IconEmail from '../img/LoginPage/email.png';
import IconPassword from '../img/LoginPage/password.png';

import '../App.css';

const ResetPasswordScreen = (props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [redirect, setRedirect] = useState(false);

  let anyError = false;
  const [errorField, setError] = useState({
    emailError: '',
    passwordError: '',
  });

  const validation = () => {
    if (password !== confirmPassword) {
      setError((prev) => ({
        ...prev,
        passwordError: 'Your two passwords must match.',
      }));
      anyError = true;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    validation();
    let resetPasswordToken = props.match.params.id;
    const data = {
      password: password,
    };
    if (!anyError) {
      axios
        .put(`/api/players/resetpassword/${resetPasswordToken}`, data)
        .then((response) => {
          setRedirect(true);
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
      <FormContainer>
        <div className='sm:flex flex-row mt-8 justify-center '>
          {redirect ? (
            <div className='sm:w-96 max-w-sm bg-white shadow-xl rounded px-8 pt-14 pb-14 mb-4 sm:mx-0 mx-7'>
              <p className='font-medium font-body text-lg pb-3 text-center'>
                Your password has been successfully reset. Please &nbsp;
                <a href='/login' className='underline text-blue-300'>
                  click here
                </a>
                &nbsp; to return to the login page.
              </p>
            </div>
          ) : (
            <form
              className='sm:w-96 max-w-sm bg-white shadow-xl rounded px-8 pt-14 pb-14 mb-4 sm:mx-0 mx-7'
              onSubmit={submitHandler}
            >
              <p className='block font-body font-medium pb-14 text-center'>
                Reset your password
              </p>
              <div className='flex border-b border-gray-400'>
                <img
                  className='w-7 h-6 p-1 my-auto'
                  src={IconPassword}
                  alt='password'
                ></img>
                <input
                  className="text-sm font-body appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none @error('email') border-red-500 @enderror"
                  id='password'
                  type='password'
                  placeholder='Enter your new password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
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
                  id='confirmPassword'
                  type='password'
                  placeholder='Confirm your new password'
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
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
              <div className='flex justify-center'>
                <button
                  className='w-56 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  RESET PASSWORD
                </button>
              </div>
              <div className='flex flex-rows justify-center pt-6'>
                <Link
                  to={''}
                  className=' text-center text-gray-700 hover:text-blue-400 hover:underline font-body text-xs'
                >
                  Go back to login
                </Link>
              </div>
            </form>
          )}
        </div>
      </FormContainer>
    </div>
  );
};

export default ResetPasswordScreen;
