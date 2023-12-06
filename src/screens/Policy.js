import React, { useEffect } from 'react';
import HomeFooter from '../components/Home/HomeFooter';

const Policy = (props) => {
  useEffect(() => {
    props.setShowFooterLogo(false);
    return () => {
      props.setShowFooterLogo(true);
    };
  }, []);
  return (
    <div>
      <div className='w-full flex-rows pt-16 text-center pb-20 mx-auto justify-center bg-white-off'>
        <h5 className='font-medium sm:text-4xl text-3xl pb-8 font-body underline m-7'>
          Privacy Policy
        </h5>
        <div className='text-left'>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Privacy Policy | Who is Protected?
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            ePleyer Inc. respects your privacy and is committed to protecting
            your personal information that you provide to us. This statement
            explains our policies and practices regarding the use and disclosure
            of your personal information by ePleyer. Please note that, ePleyer
            reviews and updates this Privacy Policy from time to time as needed
            without notice. Therefore, you should review the terms of this
            policy periodically to make sure that you are aware of how ePleyer
            collects and uses personal information. By using our web site, you
            consent to the collection and use of your personal information by
            ePleyer as explained below.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Personal Information
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            You have complete control over your personal information. In
            general, you can visit our web site without providing us with any
            personal information. However, there are instances where we must
            have your personal information in order for us to grant you an
            access to our protected and secured sites. This information may
            include registration data (your name, address, email address, phone
            number, title, etc.), information request data and response data
            ("User Information"). When you receive your confirmation email or
            when you receive any email from the list server, you will be given
            instructions on how to remove yourself from the list.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Use of User Information
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            We intend to use such information for purposes of supporting your
            relationship with ePleyer by designing a web site content that is
            suitable to your needs and alerting you to new product and service
            offerings as they become available. This User Information may be
            retained by ePleyer to verify compliance with the agreement between
            ePleyer and you, to keep track of the domains from which people
            visit us, to create a user profile to better serve you, or to simply
            contact you either electronically or otherwise. If you decide that
            we should not use your personal User Information to contact you, opt
            out of future communications and we will not use that information
            for such purpose. However, please do not submit any User Information
            if you under 18 years of age unless you have parental consent.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Disclosure of User Information
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            ePleyer does not sell, trade or transfer User Information to third
            parties. However, we may share User Information with our business
            partners for marketing, advertising or product/service offering
            purposes. For example, we provide User Information to our service
            providers for direct emailing of our newsletters, online surveys or
            notifications on ePleyer Offerings to our viewers. We also disclose
            User Information if: we have your consent; we need to share it in
            order to provide you with the products and/or services you
            requested; we respond to a court order or you violate our Terms of
            Use. You may separately agree to provide your personal information
            to third parties that provide content for ePleyer Offerings, in
            order to access and/or use their products and/or services. If you
            agree to provide such information to these third parties, then your
            personal information will be subject to their privacy policies.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Accuracy and Security
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            The accuracy and security of the User Information is important to
            ePleyer. Currently, you may review and request updates to your User
            Information retained by contacting ePleyer. If you contact us to
            correct your User Information, we will attempt to correct such
            inaccuracies in a timely manner. ePleyer is concerned with the
            security of your User Information and is committed to taking
            reasonable steps to protect it from unauthorized access and use of
            that personal information. To that end, we put in place the
            appropriate physical, electronic and managerial policies and
            procedures to secure your personal User Information. We also
            continue to implement procedures to maintain accurate, complete and
            current User Information.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Usernames and Passwords
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            Access to certain content on our web site may be allowed under a
            written agreement between you and ePleyer and will require a
            username and/or password. In some cases, failure to provide personal
            information may prevent you from accessing certain ePleyer web
            site(s) containing certain confidential information, products,
            services, or promotional offers ("ePleyer Offerings"). By accessing
            and using our protected and secured web site(s), you agree to
            maintain the confidentiality of the username and password you
            selected to access such site(s) and consent to our Terms of Use.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Cookies
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            ePleyer uses "cookies". A cookie is a small data file that a web
            site can transfer to a visitor's hard drive to keep records of the
            visits to such site. A cookie contains information such as your
            username and password that helps us recognize the pages you have
            visited and improve future visits, but the only personal information
            a cookie can contain is the information that you provide yourself. A
            cookie cannot read data off of your hard drive or read cookie files
            created by other sites. Information stored in cookies may be
            encrypted, however, we do not store your credit card number in
            cookies. If you prefer not to accept a cookie, you can set your web
            browser refuse all cookies by turning them off in your web browser.
            However, access to some of our secured web site(s) may require the
            use of cookies, which you must enable only cookies that get sent
            back to the originating server. Otherwise, you can still access most
            of the features on our web site even without accepting a cookie.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            External Links
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            ePleyer web site provides links to other third-party web sites. Even
            if the third party is affiliated with ePleyer through a business
            partnership or otherwise, ePleyer is not responsible for the privacy
            policies or practices or the content of such external links. These
            links are provided to you for convenience purposes only and you
            access them at your own risk.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Terms of Use
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            Please also see our Terms of Service, which describes the
            restrictions, disclaimers, indemnification and limitation of
            liability governing the use of the entire ePleyer web site.
          </p>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            General
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            If you have questions regarding our Privacy Statement, please
            contact ePleyer via our Contact Us page.
          </p>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Policy;
