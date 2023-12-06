import React, { useState, useEffect } from 'react';
import TeamMember from '../../TeamMember';

import Cog from '../../../img/icons/cog-solid.svg';
import NameModal from '../Settings/NameModal';
import Locked from '../../Locked';

const Roster = ({ team, setPlayer, type, showSettings }) => {
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(6);
  const [background, setBackground] = useState({});
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  function hideModal() {
    setShowSettingsModal(false);
  }

  useEffect(() => {
    const index = team.templates.findIndex(
      (template) => template.section === 'Roster'
    );
    if (team.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${team.templates[index].customTemplate})`,
      });
    } else {
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/Stats/Stats-${team.templates[index].template}.png)`,
      });
    }
    setArray(
      team.roster.filter((item, index) => {
        return index < count;
      })
    );
  }, [count, team]);

  if (team.membership.tier === 'Bronze') {
    return (
      <div
        className='w-full flex bg-gray-900 bg-cover justify-center py-10 px-10 sm:py-20 sm:px-0 sm:h-h40 h-96'
        id='Roster'
      >
        <div className='max-w-4xl w-full'>
          <div className='md:mx-4 mx-0 mb-8'>
            <div className='flex'>
              <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-white'>
                OUR ROSTER
              </h5>
            </div>
            <div className='border-yellow-400 border-2 sm:w-36 w-20  mt-2 sm:mt-4 mb-6'></div>
          </div>
          <Locked tier={'Silver'} />
        </div>
      </div>
    );
  }

  return (
    <div
      className='w-full flex bg-gray-900 bg-cover justify-center py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
      id='Roster'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={team}
          setPlayer={setPlayer}
          component={'Roster'}
          type={type}
        />
      ) : null}
      <div className='max-w-4xl w-full'>
        <div className='md:mx-4 mx-0 mb-8'>
          <div
            className={showSettings ? 'flex cursor-pointer' : 'flex'}
            onClick={() => {
              if (showSettings) setShowSettingsModal(true);
            }}
          >
            {showSettings ? (
              <div className='flex sm:pr-5 pr-3 sm:pt-0 pt-1'>
                <div>
                  <div className='sm:-mb-12 -mb-5 bg-white opacity-70 ring rounded-full h-6 w-6 sm:h-12 sm:w-12 filter blur top-0 right-0'></div>
                  <img
                    alt='Setting'
                    src={Cog}
                    className='h-6 sm:h-12 relative '
                  ></img>
                </div>
              </div>
            ) : null}
            <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-white'>
              OUR ROSTER
            </h5>
          </div>
          <div className='border-yellow-400 border-2 sm:w-36 w-20  mt-2 sm:mt-4 mb-6'></div>
        </div>
        <div className='md:grid grid-cols-3 gap-3'>
          {array.map((member) => (
            <TeamMember
              name={member.name}
              position={member.position}
              slug={member.slug}
              gravatar={member.gravatar}
            />
          ))}
        </div>
        <div className='flex justify-center'>
          <button
            className='mt-28 sm:mx-0 mx-auto sm:w-96 w-60 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin hover:bg-white border-red-600 border-2 hover:text-red-700'
            // className='bg-pink-700 hover:bg-pink-500 text-white text-3xl font-bold sm:w-96 w-80 h-16 mt-28 mb-28 px-4 rounded  focus:outline-none focus:shadow-outline '
            type='button'
            onClick={() => setCount(count + 6)}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roster;
