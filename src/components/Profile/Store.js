import React, { useState, useEffect } from 'react';
import Cog from '../../img/icons/cog-solid.svg';
import Locked from '../Locked';
import NameModal from './Settings/NameModal';

function Store(props) {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  let typeProfile = '';

  function hideModal() {
    setShowSettingsModal(false);
  }

  if (props.type === 'team') {
    typeProfile = 'OUR STORE';
  } else {
    typeProfile = 'MY STORE';
  }

  useEffect(() => {
    if (
      props.account.storeId !== '' &&
      props.account.membership.tier === 'Platinum'
    ) {
      var parent = document.getElementById('my-store');
      if (props.loaded) parent.appendChild(props.child);
      else {
        props.setLoaded(true);
        // setChild(document.createElement("div"));
        props.child.id = `my-store-${props.account.storeId}`;
        props.child.setAttribute('key', `${Math.random()}`);
        parent.appendChild(props.child);

        const script = document.createElement('script');
        script.id = `script-${props.account.storeId}`;
        script.setAttribute('key', `${Math.random()}`);
        script.src = `https://app.ecwid.com/script.js?${props.account.storeId}&data_platform=code&data_date=2021-07-07`;
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        script.async = false;
        script.setAttribute('data-cfasync', 'false');
        props.child.appendChild(script);

        const script2 = document.createElement('script');
        script.addEventListener('load', (e) => {
          script2.setAttribute('key', `${Math.random()}`);
          script2.id = `script2-${props.account.storeId}`;
          script2.innerHTML = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${props.account.storeId}");`;
          script2.type = 'text/javascript';
          script2.async = false;
          if (props.child) props.child.appendChild(script2);
        });
      }
      return () => {
        // document.getElementById("script-61982954").remove();
        // document.getElementById("script2-61982954").remove();
        props.child.remove();
      };
    }
    if (window.location.hash !== '') {
      let scroll = window.location.hash.split('#')[1];
      document.getElementById(scroll).scrollIntoView();
    }
  }, []);

  if (props.account.membership.tier !== 'Platinum') {
    return (
      <div
        className='w-full flex justify-center bg-white py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
        // style={background}
        id='Store'
      >
        <div className='max-w-4xl w-full'>
          <div className='md:mx-4 mx-0 mb-8'>
            <div className='flex'>
              <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-black'>
                {typeProfile}
              </h5>
            </div>
            <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-4 mb-6'></div>
          </div>
          <Locked tier={'Platinum'} />
        </div>
      </div>
    );
  }

  return (
    <div
      className='w-full flex justify-center bg-white py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
      // style={background}
      id='Store'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={props.player}
          setPlayer={props.setPlayer}
          component={'Store'}
          type={props.type}
        />
      ) : null}
      <div className='max-w-4xl w-full'>
        <div className='md:mx-4 mx-0 mb-8'>
          <div
            className={props.showSettings ? 'flex cursor-pointer' : 'flex'}
            onClick={() => {
              if (props.showSettings) setShowSettingsModal(true);
            }}
          >
            {props.showSettings ? (
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
            <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-black'>
              {typeProfile}
            </h5>
          </div>
          <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-4 mb-6'></div>
        </div>
        <div id='my-store' className=''></div>
      </div>
    </div>
  );
}

export default Store;
