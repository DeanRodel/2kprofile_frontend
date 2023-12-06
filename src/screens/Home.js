import React, { useEffect } from 'react';
import CreateWeb from '../components/Home/CreateWeb';
import CreateProfile from '../components/Home/CreateProfile';
import Promote from '../components/Home/Promote';
import Share from '../components/Home/Share';
import Search from '../components/Home/Search';
import Coming from '../components/Home/Coming';
import Growing from '../components/Home/Growing';
import About from '../components/Home/About';
import Pricing from '../components/Home/Pricing';
import SignUp from '../components/Home/SignUp';
import Team from '../components/Home/Team';
import HomeFooter from '../components/Home/HomeFooter';

const Home = (props) => {
  useEffect(() => {
    props.setShowFooterLogo(false);
    return () => {
      props.setShowFooterLogo(true);
    };
  }, []);
  return (
    <div>
      <CreateWeb />
      <CreateProfile />
      <Search />
      <Share />
      <Promote />
      <Coming />
      {/* <Growing /> */}
      <About />
      <Pricing {...props} />
      <SignUp />
      <Team />
      <HomeFooter />
    </div>
  );
};

export default Home;
