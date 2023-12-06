import React, { useEffect } from 'react';
import HomeFooter from '../components/Home/HomeFooter';

const ContactUs = (props) => {
  useEffect(() => {
    props.setShowFooterLogo(false);
    return () => {
      props.setShowFooterLogo(true);
    };
  }, []);
  return (
    <div className='bg-white-off w-full'>
      <div className=' w-3/4 mx-auto'>
        <div className='flex-col pt-24 mx-7'>
          <h5 className='font-medium sm:text-4xl text-2xl pb-8 font-body underline text-center'>
            Contact Us
          </h5>
          <p className='sm:mx-7 mx-0 font-body font-medium md:text-2xl text-lg'>
            Got Questions?{' '}
          </p>
          <p className='text-gray-900 pb-8 sm:ml-7 ml-0 sm:text-base text-xs '>
            We love questions, everyone has them and good, bad or otherwise,
            someone else is probably asking the same thing. Check out these
            frequently asked questions below.
          </p>
          <p className='sm:mx-7 mx-0 font-body md:text-2xl text-base font-medium'>
            Which browsers are recommended? {' '}
          </p>
          <div className='flex'>
            <p className='text-gray-900 sm:pl-7 pl-0 sm:text-base text-xs'>
              A.
            </p>
            <p className='text-gray-900 pb-8  sm:ml-7 ml-2 sm:text-base text-xs'>
              We recommend browsers including Chrome, Safari or Firefox.
            </p>
          </div>
          <p className='sm:mx-7 mx-0 font-body md:text-2xl text-base font-medium'>
            Where do I find my YouTube channel id?  {' '}
          </p>
          <div className='flex'>
            <p className='text-gray-900 sm:pl-7 pl-0 sm:text-base text-xs'>
              A.
            </p>
            <p className='text-gray-900 pb-8  sm:ml-7 ml-2 sm:text-base text-xs'>
              Check your YouTube settings, in particular your Advanced settings ba-bam…Channel ID. 
            </p>
          </div>
          <p className='sm:mx-7 mx-0 font-body md:text-2xl text-base font-medium'>
            Why do my images look distorted?  {' '}
          </p>
          <div className='flex'>
            <p className='text-gray-900 sm:pl-7 pl-0 sm:text-base text-xs'>
              A.
            </p>
            <p className='text-gray-900 pb-8  sm:ml-7 ml-2 sm:text-base text-xs'>
              Hey, it happens sometimes and for different reasons, generally we recommend file sizes of 1.5mb or less. 
            </p>
          </div>
          <p className='sm:mx-7 mx-0 font-body md:text-2xl text-base font-medium'>
            My console stats aren’t working?{' '}
          </p>
          <div className='flex'>
            <p className='text-gray-900 sm:pl-7 pl-0 sm:text-base text-xs'>
              A.
            </p>
            <p className='text-gray-900 pb-8  sm:ml-7 ml-2 sm:text-base text-xs'>
              Check out your console’s security or privacy settings and make
              sure they are enabled to share your gameplay information. We do
              not have access to your personal information, see privacy policy.
            </p>
          </div>
          <p className='sm:mx-7 mx-0 font-body md:text-2xl text-base font-medium'>
            How do I change my subscription?{' '}
          </p>
          <div className='flex'>
            <p className='text-gray-900 sm:pl-7 pl-0 sm:text-base text-xs'>
              A.
            </p>
            <p className='text-gray-900 pb-8  sm:ml-7 ml-2 sm:text-base text-xs'>
              You can make changes to your account my logging in to your ePleyer
              account, in your user dashboard under My Account.
            </p>
          </div>
          <p className='sm:mx-7 mx-0 font-body md:text-2xl text-base font-medium'>
            What if the game I play doesn’t have stats integrated?{' '}
          </p>
          <div className='flex'>
            <p className='text-gray-900 sm:pl-7 pl-0 sm:text-base text-xs'>
              A.
            </p>
            <p className='text-gray-900 pb-8 sm:ml-7 ml-2 sm:text-base text-xs'>
              We are updating our platform all the time and work directly with
              game developers to get you the best in game stats. Send us a note
              through our Contact Us page and we work hard to get them for you.
              Until then drop screen shots of your best game stats into your
              media gallery. Follow us on social media for regular updates.
            </p>
          </div>
          <p className='sm:mx-7 mx-0 font-body md:text-2xl text-base font-medium'>
            Can I use a different store instead of ECWID?{' '}
          </p>
          <div className='flex'>
            <p className='text-gray-900 sm:pl-7 pl-0 sm:text-base text-xs'>
              A.
            </p>
            <p className='text-gray-900 pb-8 sm:ml-7 ml-2 sm:text-base text-xs'>
              Unfortunately, not at this time. ECWID is easy to set up and
              offers 10 free items with their free subscription. Sign up and
              have your store up and running in no time.
            </p>
          </div>
          <p className='sm:mx-7 mx-0 font-body md:text-2xl text-base font-medium'>
            More Questions?{' '}
          </p>
          <p className='text-gray-900 pb-8 sm:ml-7 ml-0 sm:text-base text-xs'>
            Do you have more questions and don’t see them here? Send us a note
            at{' '}
            <font className='text-blue-700 underline'>
              <a
                href={`mailto: info@epleyer.com`}
                target='_blank'
                rel='noreferrer'
              >
                info@epleyer.com
              </a>
            </font>
          </p>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default ContactUs;
