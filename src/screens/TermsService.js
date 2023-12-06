import React, { useEffect } from 'react';
import HomeFooter from '../components/Home/HomeFooter';

const TermsService = (props) => {
  useEffect(() => {
    props.setShowFooterLogo(false);
    return () => {
      props.setShowFooterLogo(true);
    };
  }, []);
  return (
    <div>
      {/* <div className=" bg-white-off w-3/4 mx-auto pb-20"> */}
      <div className='w-full flex-rows text-center mx-auto justify-center bg-white-off pb-20'>
        <h5 className='font-medium sm:text-4xl text-2xl pb-8 font-body underline mx-7 pt-20'>
          Terms Of Service
        </h5>
        <div className='text-left'>
          <h5 className='text-red-600 mx-7 sm:text-lg text-base font-body font-bold'>
            Introduction and Acceptance of Terms of Use
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            ePleyer Inc. offers you a wide range of content, communication
            tools, forums, and information about its products and services
            ("Materials") via this web site. By using this web site, you are
            agreeing to accept and comply with the terms and conditions of use
            as stated below ("Terms of Use"), which ePleyer Inc. may update at
            any time without notice. You should visit this page periodically to
            review the then-current Terms of Use. Please note that ePleyer Inc.
            may, at its sole discretion, terminate your access to this web site
            at any time without notice.
          </p>
          <h5 className='text-red-600 mx-7 pt-5 sm:text-lg text-base font-body font-bold'>
            Product Use
          </h5>
          <p className='text-gray-900 pb-5 mx-7'>
            This web site is owned and operated by ePleyer Inc. Unless otherwise
            specified, all Materials on this web site are the property of
            ePleyer Inc. and are protected by the copyright laws of Canada and,
            throughout the world by the applicable copyright laws. The Materials
            from this web site are solely for your personal, informational,
            non-commercial use, provided you keep intact all copyright and other
            proprietary notices. No Materials published by ePleyer Inc. on this
            web site, in whole or in part, may be copied, reproduced, modified,
            republished, uploaded, posted, transmitted, or distributed in any
            form or by any means without prior written permission from ePleyer
            Inc. The use of any such Materials on any other web site or
            networked computer environment or for any other purpose is strictly
            prohibited and such unauthorized use may violate copyright,
            trademark and other similar laws.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            Should you register to take advantage of certain features, you
            agree:
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            To provide true, accurate, current and complete information about
            yourself as prompted by the Product;
          </p>
          <ul className='list-disc mx-7 pl-8 pb-8'>
            <li className='text-gray-900'>
              that your account is for your personal and/or business use. You
              may not resell the Service;
            </li>
            <li className='text-gray-900 pt-2'>
              as permitted, maintain and promptly update such information. If
              you provide any information that is false, inaccurate or outdated,
              ePleyer Inc. has reasonable grounds to suspect that such
              information is false, inaccurate or outdated, ePleyer Inc. has the
              right to suspend or terminate your account and prohibit all
              current or future use of the Product by you; and
            </li>
            <li className='text-gray-900 pt-2'>
              that you are responsible for maintaining the confidentiality of
              the password and account and are fully responsible for all
              activities that occur under your account. Your account is meant to
              be private and you shall not share accounts for any reason. You
              agree to immediately notify us of any unauthorized use of your
              password or account or any other breach of security. You agree to
              be responsible for all charges resulting from the use of your
              account via the Product, including charges resulting from
              unauthorized use of your account.
            </li>
          </ul>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Code of Conduct
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            You agree to use the Product only for lawful purposes and that you
            are responsible for your use of and communications and content you
            may post via the Product. You agree not to post or transmit any
            unlawful, infringing, threatening, harassing, defamatory, vulgar,
            obscene, profane, indecent, offensive, hateful or otherwise
            objectionable material of any kind, including any material that
            encourages criminal conduct or conduct that would give rise to civil
            liability, infringes upon others’ intellectual property rights,
            impersonates any individual or entity, or otherwise violates any
            applicable law. You agree not to solicit personal information from
            minors. You agree not to use the Product in any manner that
            interferes with its normal operation or with any other user’s use of
            the Product.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Communications
          </h5>
          <p className='text-gray-900 pb-5 mx-7'>
            By creating an account, you agree to receive certain communications
            in connection with the Service.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            It should be understood that ePleyer Inc. is not liable for any
            third-party communications that you may receive from third parties
            or affiliates of ePleyer Inc., in connection with your account. You
            are solely responsible for evaluating and verifying the identity and
            trustworthiness of any correspondence you receive. ePleyer Inc.
            makes no representations or warranties with regards to the accuracy,
            trustworthiness or identity of third-party communications
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            Except for any disclosure by you for technical support purposes, or
            as specified in our Privacy Statement, all communications from you
            to this web site will be considered non-confidential and
            non-proprietary. You agree that any and all comments, information,
            feedback and ideas regarding our company, products or services that
            you communicate to ePleyer Inc. ("Feedback") will be deemed, at the
            time of communication to ePleyer Inc., the property of ePleyer Inc.,
            and ePleyer shall be entitled to full rights of ownership, including
            without limitation, unrestricted right to use or disclose such
            Feedback in any form, medium or technology now known or later
            developed, and for any purpose, commercial or otherwise, without
            compensation to you. You are solely responsible for the content of
            your communications and their legality under all laws and
            regulations.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            You agree not to use this web site to distribute, link to or solicit
            content that is defamatory, harassing, unlawful, libelous, harmful
            to minors, threatening, obscene, false, misleading, or infringing a
            third party intellectual or privacy rights.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Monitoring
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            Although ePleyer Inc. is not obligated to do so, it will have the
            right to review your communications on this web site to determine
            whether you comply with our Terms of Use. ePleyer Inc. will not have
            any liability or responsibility for the content of any
            communications you post to this web site, or for any errors or
            violations of any laws or regulations by you. ePleyer Inc. will
            comply with any court order in disclosing the identity of any person
            posting communications on this web site. It is advisable that you
            review our Privacy Policy before posting any such communications.
            Please note that when you conduct transactions with other companies
            providing content via this web site, you will also be subject to
            their privacy policies.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Access to Password Protected or Secured Areas
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            Access to and use of password protected or secured areas of this web
            site is restricted to authorized users only. You will be asked to
            provide accurate and current information on all registration forms
            on this web site. You are solely responsible for maintaining the
            confidentiality of any username and password that you choose or is
            chosen by your web administrator on your behalf, to access this web
            site as well as any activity that occur under your
            username/password. You will not misuse or share your username or
            password, misrepresent your identity or your affiliation with an
            entity, impersonate any person or entity, or misstate the origin of
            any Materials you are exposed to through this web site.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Trademarks
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            The trademarks, service marks and logos of ePleyer Inc. and others
            used in this web site ("Trademarks") are the property of ePleyer
            Inc. and their respective owners. You have no right to use any such
            Trademarks, and nothing contained in this web site or the Terms of
            Use grants any right to use (by implication, waiver, estoppel or
            otherwise) any Trademarks without the prior written permission of
            ePleyer Inc. or the respective owner.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Applicable Laws
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            These Terms of Use are governed by the law in force in Canada and
            the parties irrevocably submit to the non-exclusive jurisdiction of
            the courts of Canada and courts of appeal from them for determining
            any dispute concerning the Terms of Use.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Indemnity
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            You agree to indemnify, defend and hold ePleyer Inc. harmless from
            and against any and all third-party claims, liabilities, damages,
            losses or expenses (including reasonable attorney's fees and costs)
            arising out of, based on or in connection with your access and/or
            use of this web site.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Limitation of Liability
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            In no event shall ePleyer Inc. Or its suppliers be liable for any
            direct, indirect, special, incidental or consequential damages
            including, without limitation, loss profits or revenues, costs of
            replacement goods, loss or damage to data arising out of the use or
            inability to use this web site or any linked site, damages resulting
            from use of or reliance on the information or materials presented on
            this web site, whether based on warranty, contract, tort or any
            other legal theory even if ePleyer Inc. or its suppliers have been
            advised of the possibility of such damages.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Disclaimer
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            ePleyer Inc. assumes no responsibility for accuracy, correctness,
            timeliness, or content of the Materials provided on this web site.
            You should not assume that the Materials on this web site are
            continuously updated or otherwise contain current information.
            ePleyer Inc. is not responsible for supplying content or materials
            from the web site that have expired or have been removed. The
            materials provided at this web site are provided "as is" and any
            warranty (express or implied), condition or other term of any kind,
            including without limitation, any warranty of merchantability,
            fitness for a particular purpose, non-infringement or title is
            hereby excluded.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Service Availability
          </h5>
          <p className='text-gray-900 pb-5 mx-7'>
            The Service may be modified, updated, interrupted, suspended or
            discontinued at any time, in the sole discretion of ePleyer Inc.,
            without notice or liability. The Service may be unavailable at
            certain periods, including but not limited to systems failures,
            anticipated or unanticipated maintenance work, upgrades or force
            majeure events.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            ePleyer Inc. reserves the right, at any time, in its sole discretion
            to modify, temporarily or permanently block access to, suspend, or
            discontinue the Service, in whole or in part, with or without notice
            and effective immediately to any User.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            ePleyer Inc. will have no liability whatsoever for any losses,
            liabilities or damages you may incur as the result of any
            modification, suspension, or discontinuation of the Service or any
            part thereof.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Intellectual Property
          </h5>
          <p className='text-gray-900 pb-5 mx-7'>
            All content published and made available on our Site is the property
            of ePleyer Inc. This includes, but is not limited to images, text,
            logos, documents, downloadable files and anything that contributes
            to the composition of our site.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            You acknowledge that all materials on the Product, including, but
            not limited to, the Website design, Application design, graphics,
            text, sounds, pictures, and other files and the selection and
            arrangement thereof (collectively, “Materials”), are the property of
            Company and/or its licensors, and are subject to and protected by
            Canada, United States and international copyright and other
            intellectual property laws and rights. All rights to Materials not
            expressly granted in these Terms of Service are reserved to their
            respective copyright owners. Company authorizes you to view,
            download and/or print the Materials only for personal,
            non-commercial use, provided that you keep intact all copyright and
            other proprietary notices contained in the original Materials.
            Except as expressly authorized by the Terms of Service, you may not
            copy, reproduce, distribute, republish, download, perform, display,
            post, transmit, scrape, copy, exploit, create derivative works or
            otherwise use any of the Materials in any form or by any means,
            without the prior written authorization of Company or the respective
            copyright owner. In the absence of a written agreement, you may not
            modify or adapt the Materials in any way or otherwise use them for
            any public or commercial purposes. The trademarks, service marks,
            trade names, trade dress and logos (collectively, “Marks”) contained
            or described in the Product are the sole property of Company and/or
            its licensors and may not be copied, altered or otherwise used, in
            whole or in part, without the prior written authorization of Company
            and/or its licensors. Company reserves the right to enforce its
            intellectual property rights fully under the law.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            Your use of the Product is solely and exclusively under the limited
            license granted herein and you will not obtain any ownership
            interest therein through the Terms of Service or otherwise. All
            trademarks, service marks, trade names, domain names, slogans,
            logos, and other indicia of origin that appear on or in connection
            with any aspect of the Product are either the property of Company,
            its affiliates or licensors. Company retains the right to rescind
            and terminate the limited license granted hereunder at any point,
            for any reason. All rights not expressly granted herein by Company
            to you are fully reserved by Company, its advertisers and licensors.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            Some of the company and product names, logos, brands, and other
            trademarks featured or referred to within the Product may not be
            owned by us and are the property of their respective trademark
            holders. These trademark holders are not affiliated with, nor do
            they sponsor or endorse the Product.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            User Content
          </h5>
          <p className='text-gray-900 pb-5 mx-7'>
            “User Content” means any and all information and content that a user
            submits to, or uses with, the Services, including but not limited
            to, content in the user’s profile or postings. You may choose to
            enter this information manually or, where available, synchronize
            with a third-party. ePleyer Inc. does not verify the accuracy or
            completeness of User Content and these may therefore be subject to
            errors.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            You are solely responsible for your User Content. You assume all
            risks associated with use of your User Content, including any
            reliance on its accuracy, completeness or usefulness by others, or
            any disclosure of your User Content that personally identifies you
            or any third party. You hereby represent and warrant that your User
            Content does not violate any of the Terms of Service
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            You may not represent or imply to others that your User Content is
            in any way provided, sponsored or endorsed by Us. Because you alone
            are responsible for your User Content, you may expose yourself to
            liability if, for example, your User Content violates this Terms of
            Service in any way.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            ePleyer Inc. does not and is not obligated to backup any User
            Content, and your User Content may be deleted at any time without
            prior notice. You are solely responsible for creating and
            maintaining your own backup copies of your User Content.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            We may, at our discretion, pre-screen User Content submission and
            may choose to remove User Content at any time we see fit. You agree
            that the ePleyer Inc. is not responsible for any financial loss,
            liability or damage of any kind that you may incur as a result of
            our removing or refusing to publish User Content.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            We reserve the right, but have no obligation, to review any User
            Content, and to investigate and/or take appropriate action against
            you in our sole discretion if you violate these Terms of Service or
            otherwise create liability for Us or any other person. Such action
            may include removing or modifying your User Content, terminating
            your Account, and/or reporting you to law enforcement authorities.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            We may from time to time allow you to share Site content via social
            media share buttons. Such sharing must include attribution to the
            Site
          </p>
          <h5 className='text-red-600 mx-7 pt-5 sm:text-lg text-base font-body font-bold'>
            Third Party Providers
          </h5>
          <p className='text-gray-900 pb-5 mx-7'>
            In the event we include links via the Service to a Third-Party
            provider (including advertisements) which may include products,
            goods, services or information offered therein, these are provided
            only as a convenience. If you clickthrough using these links to
            other providers, you may leave our Site. We do not control nor
            endorse any such Third-Party providers. You agree that the Company
            Parties, as defined below, will not be responsible or liable for any
            content, products, goods, services or information provided or
            available via any Third-Party provider or for your use or inability
            to use a Third-Party provider.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            You will use such links at your own risk. You are advised that other
            providers on the Internet, including Third-Party providers linked
            from our Site, might contain material or information:
          </p>
          <ul className='list-disc mx-7 pl-8 pb-5'>
            <li className='text-gray-900'>
              that some people may find offensive or inappropriate;
            </li>
            <li className='text-gray-900 pt-2'>
              that is inaccurate, untrue, misleading or deceptive; or,
            </li>
            <li className='text-gray-900 pt-2'>
              that is defamatory, libelous, infringing of others’ rights or
              otherwise unlawful.
            </li>
          </ul>
          <p className='text-gray-900 pb-5 mx-7'>
            We expressly disclaim any responsibility for the content, legality,
            decency or accuracy of any information, and for any content,
            products, goods, services or information, that appear on any
            Third-Party providers or in advertisements or content that Third
            Parties may have listed or offered on our Site.
          </p>
          <p className='text-gray-900 pb-5 mx-7'>
            Your interactions with Third Parties found on or through the
            Service, including payment and delivery of goods or services, if
            any, conditions, warranties or representations associated with such
            matters are solely between you and the Third Parties, except as may
            be otherwise stated herein. You acknowledge and agree that Company
            is not a party to any transactions you may enter into, except as may
            be stated herein, using the Service and we shall not under any
            circumstances be liable for any damages of any kind arising out of,
            or in connection with, or relating to, the content, products, goods,
            services or information of a Thirty-Party.
          </p>
          <ul className='list-disc mx-7 pl-8 pb-5'>
            <li className='text-gray-900'>
              Our Services make use of the YouTube Data API Services. Users
              agree to be bound to the YouTube Terms of Service (Available here:
              https://www.youtube.com/t/terms) when they make use of
              functionality on our services that use the YouTube API Services.
            </li>
            <li className='text-gray-900 pt-2'>
              Our Services make use of the Discord API Services. Users agree to
              be bound to the Discord Terms of Service (Available here:
              https://discord.com/terms) when they make use of functionality on
              our services that use the Discord API Services.
            </li>
            <li className='text-gray-900 pt-2'>
              Our Services make use of the Vimeo API Services. Users agree to be
              bound to the Vimeo Terms of Service (Available here:
              https://vimeo.com/terms) when they make use of functionality on
              our services that use the Vimeo API Services.
            </li>
            <li className='text-gray-900 pt-2'>
              Our Services make use of the Instagram API Services. Users agree
              to be bound to the Instagram Terms of Service (Available here:
              https://help.instagram.com/581066165581870) when they make use of
              functionality on our services that use the Instagram API Services.
            </li>
            <li className='text-gray-900 pt-2'>
              Our Services make use of the Ecwid API Services. Users agree to be
              bound to the Ecwid Terms of Service (Available here:
              https://www.ecwid.com/terms-of-service) when they make use of
              functionality on our services that use the Ecwid API Services.
            </li>
            <li className='text-gray-900 pt-2'>
              Our Services make use of the Riot Games API Services. Users agree
              to be bound to the Riot Games Terms of Service (Available here:
              https://www.riotgames.com/en/terms-of-service) when they make use
              of functionality on our services that use the Riot API Services.
            </li>
            <li className='text-gray-900 pt-2'>
              Our Services make use of the Epic Games API Services. Users agree
              to be bound to the Epic Games Terms of Service (Available here:
              https://www.epicgames.com/site/en-US/tos) when they make use of
              functionality on our services that use the Epic API Services.
            </li>
            <li className='text-gray-900 pt-2'>
              Our Services make use of the Steam API Services. Users agree to be
              bound to the Steam Terms of Service (Available here:
              https://store.steampowered.com/subscriber_agreement/) when they
              make use of functionality on our services that use the Steam API
              Services
            </li>
            <li className='text-gray-900 pt-2'>
              Our Services make use of the Sony PlayStation API Services. Users
              agree to be bound to the PlayStation Terms of Service (Available
              here:
              https://www.playstation.com/en-ca/legal/psn-terms-of-service/)
              when they make use of functionality on our services that use the
              PlayStation API Use of the Servic
            </li>
          </ul>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Links to Other Sites
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            The linked sites are not under the control of ePleyer Inc. and
            ePleyer Inc.is not responsible for the content of any linked site or
            any link contained in a linked site. ePleyer Inc. reserves the right
            to terminate any link at any time. ePleyer Inc. may provide links
            from this web site to other sites as a convenience to you and in no
            way should this be interpreted as an endorsement of any company,
            content or products to which it links. If you decide to access any
            of the third-party sites linked to this web site, you do this
            entirely at your own risk. ePleyer Inc. disclaims any and all
            warranties, express or implied, to any such linked sites, including
            but not limited to any terms as to the accuracy, ownership, validity
            or legality of any content of a linked site.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            Termination
          </h5>
          <p className='text-gray-900 pb-8 mx-7'>
            Subject to this section, the Terms herein will remain in full force
            and effect while you use the Service. You may terminate your use of
            the Product at any time
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            We may suspend or terminate your rights to use the Service
            (including your account) at any time for any reason, or no reason,
            at our sole discretion, including for any use of the Service in
            violation of these Terms.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            Upon termination of your rights under these Terms, by you or by us,
            your Account and right to access and use the Service will terminate
            immediately. You understand that any termination of your account may
            involve deletion of your User Content associated with your account
            from our live databases.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            The ePleyer Inc. will not have any liability whatsoever to you for
            any termination of your rights under these Terms, including for
            termination of your account or deletion of your User Content.
          </p>
          <h5 className='text-red-600 pt-5 mx-7 sm:text-lg text-base font-body font-bold'>
            General
          </h5>
          <p className='text-gray-900 pb-20 mx-7'>
            If you have any questions regarding the Terms of Use, please contact
            ePleyer Inc. Via our Contact Us page.
          </p>
        </div>
      </div>
      
      <HomeFooter />
    </div>
  );
};

export default TermsService;
