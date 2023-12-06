import axios from 'axios';
import { useState } from 'react';
//import countries from '../../data/countries';
import Close from '../../../img/icons/close_black.png';

export default function Invites({ hideInvites, player, setTeams, setPlayer }) {
  const [invites, setInvites] = useState(player.rosterInvites);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((i) => (i + 1) % invites.length);
  };
  const prev = () => {
    setIndex(
      (i) => (((i - 1) % invites.length) + invites.length) % invites.length
    );
  };

  function acceptInvite(invite) {
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    let body = { team: invite.team };
    axios.put('/api/players/teamInvite', body).then((res) => {
      setMessage(res.data.success);
      setPlayer(res.data.player);
      setTeams(res.data.teams);
      setShowMessage(true);
      const newInviteList = invites.filter((inviteMap) => inviteMap !== invite);
      if (index === newInviteList.length) {
        prev();
      }
      if (invites.length < 1) {
        hideInvites();
      }
      setInvites(newInviteList);
    });
  }

  function denyInvite(invite) {
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    let body = { team: invite.team };
    axios.delete('/api/players/teamInvite', { data: body }).then((res) => {
      setMessage(res.data.success);
      setPlayer(res.data.player);
      setShowMessage(true);
      const newInviteList = invites.filter((inviteMap) => inviteMap !== invite);
      if (newInviteList.length < 1) {
        hideInvites();
      }
      if (index === newInviteList.length) {
        prev();
      }
      setInvites(newInviteList);
    });
  }

  return (
    <div
      className='fixed z-10 inset-0 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
          onClick={hideInvites}
        ></div>
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        {invites.length < 1 ? (
          <div className='inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:px-0 px-8 '>
            <div className='h-28 text-center mt-14'>
              <p className='font-head inline-block'>You have no invites.</p>{' '}
              <a
                href='/search'
                className='font-head inline-block underline text-blue-400'
              >
                Search
              </a>{' '}
              <p className='font-head inline-block'>
                for a team to join and get in contact!
              </p>
            </div>
          </div>
        ) : (
          <div className='inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:px-0 px-8 '>
            <img
              className='w-7 ml-auto mr-2 mt-2'
              src={Close}
              onClick={hideInvites}
            ></img>
            <div className='flex sm:mx-0 mx-auto'>
              <h5 className='font-bold sm:text-2xl text-xl pb-4 text-black font-head mx-auto pt-10'>
                Invites
              </h5>
              <p className='font-bold mr-7 pt-10'>
                {index + 1} / {invites.length}
              </p>
            </div>
            <div className='flex justify-center'>
              <div>
                {showMessage ? (
                  <>
                    {message === 'Invite accepted' ? (
                      <p className=' mb-2 font-head tracking-widest bg-green-300 px-5 py-1 text-center text-xs shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-green-400 mr-2'>
                        {message}
                      </p>
                    ) : (
                      <p className='mb-2 bg-red-300 px-5 py-1 text-center text-xs shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-red-400 mr-2'>
                        {message}
                      </p>
                    )}
                  </>
                ) : null}
                <div className='flex '>
                  <div className='sm:flex'>
                    <div className='w-64'>
                      <div className='rounded-lg bg-gray-200 w-full  border-2 mb-7'>
                        <div className='flex'>
                          <div>
                            <div className='w-44'>
                              <p
                                className='ml-1 mt-1'
                                style={{ fontSize: '0.5rem', height: '0.3rem' }}
                              >
                                Team Name
                              </p>
                              <label
                                className='ml-1 font-bold'
                                style={{ fontSize: '0.6rem' }}
                              >
                                {invites[index].name}
                              </label>
                            </div>
                            <div className='w-40'>
                              <p
                                className='ml-1 mt-1'
                                style={{ fontSize: '0.5rem', height: '0.3rem' }}
                              >
                                Game
                              </p>
                              <label
                                className='ml-1 font-bold'
                                style={{ fontSize: '0.6rem' }}
                              >
                                {invites[index].game}
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className='w-44'>
                              <p
                                className='ml-1 mt-1'
                                style={{ fontSize: '0.5rem', height: '0.2rem' }}
                              >
                                Team Tag
                              </p>
                              <label
                                className='text-xs ml-1 font-bold'
                                style={{ fontSize: '0.6rem' }}
                              >
                                {invites[index].teamTag}
                              </label>
                            </div>
                            <div className='w-44'>
                              <p
                                className='ml-1 mt-1'
                                style={{ fontSize: '0.5rem', height: '0.2rem' }}
                              >
                                Console
                              </p>
                              <label
                                className='text-xs ml-1 font-bold'
                                style={{ fontSize: '0.6rem' }}
                              >
                                {invites[index].console}
                              </label>
                            </div>
                          </div>
                        </div>
                        <p
                          className='ml-1  mt-1'
                          style={{ fontSize: '0.5rem', height: '0.9rem' }}
                        >
                          Message
                        </p>
                        <textarea
                          className=' h-7 w-full pl-1 pr-1 bg-gray-200 font-medium'
                          style={{ fontSize: '0.7rem' }}
                          disabled
                        >
                          {invites[index].message}
                        </textarea>
                      </div>
                    </div>
                    <div className='ml-2 flex flex-col pt-1'>
                      <button
                        type='button'
                        className='sm:w-48 w-64 sm:text-sm text-xs  font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-8 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline'
                        onClick={() => acceptInvite(invites[index])}
                      >
                        ACCEPT
                      </button>
                      <button
                        type='button'
                        className='sm:pb-0 mb-7 mt-3 sm:w-48 w-64  sm:text-sm text-xs  font-oswald font-thin tracking-widest border-gray-400 h-8 hover:text-gray-700 bg-gray-400 border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline'
                        onClick={() => denyInvite(invites[index])}
                      >
                        DENY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between sm:mx-7 mx-0'>
              <button
                type='button'
                className='w-16  text-xs sm:ml-0 ml-2 font-oswald font-thin tracking-widest border-gray-400 bg-gray-400 h-6 hover:border-gray-500   border-2 hover:bg-gray-500  text-white py-auto px-4 focus:outline-none focus:shadow-outline'
                onClick={prev}
              >
                PREV
              </button>
              <button
                type='button'
                className='mb-5 w-16  text-xs   font-oswald font-thin tracking-widest border-gray-400  bg-gray-400 h-6 hover:border-gray-500  border-2 hover:bg-gray-500  text-white py-auto px-4 focus:outline-none focus:shadow-outline'
                onClick={next}
              >
                NEXT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
