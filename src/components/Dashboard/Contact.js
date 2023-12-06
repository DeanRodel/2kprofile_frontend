import React, { useState } from 'react';
import axios from 'axios';

const Contact = ({ account, setPlayer, type, setTeam }) => {
  const [success, setSuccess] = useState('');
  const [show, setShow] = useState(account.templates[7].show);

  function updateContact() {
    let body = {
      user: {
        email: document.getElementById('userEmail').value,
        phone: document.getElementById('userPhone').value,
      },
      coach: {
        email: document.getElementById('coachEmail').value,
        phone: document.getElementById('coachPhone').value,
      },
      manager: {
        email: document.getElementById('managerEmail').value,
        phone: document.getElementById('managerPhone').value,
      },
      agency: {
        email: document.getElementById('agencyEmail').value,
        phone: document.getElementById('agencyPhone').value,
      },
    };
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    if (type === 'player') {
      axios.put('/api/players/updateContact', body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
      });
    }
    if (type === 'team') {
      axios.put(`/api/teams/${account._id}/updateContact`, body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.team);
      });
    }
  }

  function toggle() {
    let toggle = document.getElementById('toggleContact');
    setShow(toggle.checked);
    const body = {
      section: 'Contact',
      value: toggle.checked,
    };
    if (account.profile_info) {
      axios.put("/api/players/toggleSection", body);
      const templates = account.templates;
      templates[7].show = toggle.checked;
      setPlayer({ ...account, templates: templates });
    } else {
      axios.put(`/api/teams/${account._id}/toggleSection`, body);
      const templates = account.templates;
      templates[7].show = toggle.checked;
      setTeam({ ...account, templates: templates });
    }
  }

  return (
    <div
      className='w-full sm:grid grid-rows justify-center bg-cobe'
      id='Contact'
    >
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
          Contact
        </h5>
      </div>
      <div className='mt-2 md:pl-8 pl-0 sm:justify-start justify-center md:pb-10 pb-6 flex'>
        <div className='flex'>
          <p className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2'>
            Hide
          </p>
          <div className='relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='toggleContact'
              className='toggle-checkbox absolute block w-6 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer'
              onChange={toggle}
              checked={show}
            />
            <p
              for='toggle'
              className='toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer'
            ></p>
          </div>
          <label
            for='toggle'
            className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right'
          >
            Show
          </label>
        </div>
      </div>

      <div className='grid sm:grid-cols-5 grid-cols-4 md:mr-5 mr-0 pt-5'>
        <div className='sm:flex hidden' />
        <div className='flex items-center justify-end md:pr-7 sm:pr-1 pr-4'>
          <p className='text-center font-body text-white sm:text-base text-xs'>
            My Email:
          </p>
        </div>
        <div className='col-span-3 '>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='userEmail'
            defaultValue={account.contact.user.email}
            onChange={() => setSuccess('')}
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-5 grid-cols-4 md:mr-5 mr-0 pt-5'>
        <div className='sm:flex hidden' />
        <div className='flex items-center justify-end md:pr-7 sm:pr-1 pr-4'>
          <p className='text-center  font-body text-white sm:text-base text-xs'>
            My Phone:
          </p>
        </div>
        <div className='col-span-3 '>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='userPhone'
            defaultValue={account.contact.user.phone}
            onChange={() => setSuccess('')}
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-5 grid-cols-4 md:mr-5 mr-0 pt-5'>
        <div className='sm:flex hidden' />
        <div className='flex items-center justify-end md:pr-7 pr-1'>
          <p className='text-center font-body text-white sm:text-base text-xs sm:pl-0 pl-2'>
            Coach's Email:
          </p>
        </div>
        <div className='col-span-3 '>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='coachEmail'
            defaultValue={account.contact.coach.email}
            onChange={() => setSuccess('')}
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-5 grid-cols-4 md:mr-5 mr-0 pt-5'>
        <div className='sm:flex hidden' />
        <div className='flex items-center justify-end md:pr-7 pr-1'>
          <p className='text-center font-body text-white sm:text-base text-xs sm:pl-0 pl-2'>
            Coach's Phone:
          </p>
        </div>
        <div className='col-span-3 '>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='coachPhone'
            defaultValue={account.contact.coach.phone}
            onChange={() => setSuccess('')}
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-5 grid-cols-4 md:mr-5 mr-0 pt-5'>
        <div className='sm:flex hidden' />
        <div className='flex items-center justify-end md:pr-7 pr-1'>
          <p className='text-center font-body text-white sm:text-base text-xs'>
            Manager's Email:
          </p>
        </div>
        <div className='col-span-3 '>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='managerEmail'
            defaultValue={account.contact.manager.email}
            onChange={() => setSuccess('')}
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-5 grid-cols-4 md:mr-5 mr-0 pt-5'>
        <div className='sm:flex hidden' />
        <div className='flex items-center justify-end md:pr-7 pr-1'>
          <p className='text-center font-body text-white sm:text-base text-xs'>
            Manager's Phone:
          </p>
        </div>
        <div className='col-span-3 '>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='managerPhone'
            defaultValue={account.contact.manager.phone}
            onChange={() => setSuccess('')}
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-5 grid-cols-4 md:mr-5 mr-0 pt-5'>
        <div className='sm:flex hidden' />
        <div className='flex items-center justify-end md:pr-7 pr-1'>
          <p className='text-center font-body text-white sm:text-base text-xs'>
            Agency's Email:
          </p>
        </div>
        <div className='col-span-3 '>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='agencyEmail'
            defaultValue={account.contact.agency.email}
            onChange={() => setSuccess('')}
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-5 grid-cols-4 md:mr-5 mr-0 pt-5'>
        <div className='sm:flex hidden' />
        <div className='flex items-center justify-end md:pr-7 pr-1'>
          <p className='text-center font-body text-white sm:text-base text-xs'>
            Agency's Phone:
          </p>
        </div>
        <div className='col-span-3'>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='agencyPhone'
            defaultValue={account.contact.agency.phone}
            onChange={() => setSuccess('')}
          />
        </div>
      </div>
      {success !== '' ? (
        <div className='pr-5 sm:pl-0 pl-5'>
          <p className='h-10 my-5 w-full bg-green-300 px-5 pt-2  sm:text-base text-xs text-center shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400'>
            {success}
          </p>
        </div>
      ) : null}
      <div className='grid grid-cols-1 sm:ml-auto sm:pr-10 pr-0 ml-0  pt-10'>
        <button
          className=' sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base text-xs font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'
          onClick={updateContact}
        >
          UPDATE CONTACT
        </button>
      </div>
    </div>
  );
};

export default Contact;
