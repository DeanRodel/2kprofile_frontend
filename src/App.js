import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';

import IndexScreen from './screens/IndexScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import About from './screens/About';
import TermsService from './screens/TermsService';
import Policy from './screens/Policy';
import Mission from './screens/Mission';
import Pricing from './screens/Pricing';
import ContactUs from './screens/ContactUs';

import PlayerDashboard from './screens/PlayerDashboard';
import ProfileScreen from './screens/ProfileScreen';
import Search from './screens/Search';
import TeamScreen from './screens/TeamScreen';
import TeamProfileScreen from './screens/TeamProfileScreen';
import PlayerScreen from './screens/PlayerScreen';
import TeamDashboard from './screens/TeamDashboard';
import Footer from './components/Footer';
import Header from './components/Headers/Header';
import Home from './screens/Home';
import PaymentScreen from './screens/PaymentScreen';
import TeamPaymentScreen from './screens/TeamPaymentScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import { useGA4React } from 'ga-4-react';
import ScrollToTop from './components/util/ScrollToTop';

function App() {
  useGA4React();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('jwtToken') ? true : false
  );
  const [player, setPlayer] = useState({});
  const [team, setTeam] = useState({});
  const [teamPage, setTeamPage] = useState(false);
  const [store, setStore] = useState(document.createElement('div'));
  const [storeLoaded, setStoreLoaded] = useState(false);
  const [showFooterLogo, setShowFooterLogo] = useState(true);

  useEffect(() => {
    if (
      window.location.pathname.includes('/team/') ||
      window.location.pathname.includes('/teamdashboard/')
    ) {
      setTeamPage(true);
    } else {
      setTeamPage(false);
    }
  }, [window.location.pathname]);

  return (
    <div className='flex flex-col h-screen'>
      <div className=' max-w-screen-2xl w-full mx-auto h-full'>
        <div id='container' className='flex flex-col h-full overflow-auto'>
          {/* className="h-screen" */}

          <Router
          // {...(process.env.REACT_APP_IS_ROOT === '0' && {
          //   basename: `${process.env.REACT_APP_BASE_PATH}`,
          // })}
          >
            <Header
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              player={player}
              team={team}
            />
            <ScrollToTop>
              <Switch>
                <Route path='/' component={IndexScreen} exact />

                <Route
                  path='/login'
                  render={(props) => (
                    <LoginScreen
                      {...props}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  )}
                />
                <Route
                  path='/player/:id'
                  render={(props) => (
                    <PlayerScreen
                      {...props}
                      player={player}
                      setPlayer={setPlayer}
                      child={store}
                      setChild={setStore}
                      loaded={storeLoaded}
                      setLoaded={setStoreLoaded}
                    />
                  )}
                />

                <Route
                  path='/profile'
                  render={(props) => (
                    <ProfileScreen
                      {...props}
                      player={player}
                      setPlayer={setPlayer}
                      child={store}
                      setChild={setStore}
                      loaded={storeLoaded}
                      setLoaded={setStoreLoaded}
                    />
                  )}
                />

                <Route
                  path='/register'
                  render={(props) => (
                    <RegisterScreen {...props} setIsLoggedIn={setIsLoggedIn} />
                  )}
                />

                <Route
                  path='/home'
                  render={(props) => (
                    <Home
                      {...props}
                      setIsLoggedIn={setIsLoggedIn}
                      setShowFooterLogo={setShowFooterLogo}
                    />
                  )}
                />

                <Route
                  path='/forgotPassword'
                  component={ForgotPasswordScreen}
                />
                <Route
                  path='/resetPassword/:id'
                  component={ResetPasswordScreen}
                />
                <Route
                  path='/about'
                  render={(props) => (
                    <About {...props} setShowFooterLogo={setShowFooterLogo} />
                  )}
                />
                <Route
                  path='/services'
                  render={(props) => (
                    <TermsService
                      {...props}
                      setShowFooterLogo={setShowFooterLogo}
                    />
                  )}
                />
                <Route
                  path='/policy'
                  render={(props) => (
                    <Policy {...props} setShowFooterLogo={setShowFooterLogo} />
                  )}
                />
                <Route
                  path='/contactUs'
                  render={(props) => (
                    <ContactUs
                      {...props}
                      setShowFooterLogo={setShowFooterLogo}
                    />
                  )}
                />
                <Route
                  path='/mission'
                  render={(props) => (
                    <Mission {...props} setShowFooterLogo={setShowFooterLogo} />
                  )}
                />
                {/* <Route path='/home' component={Home} /> */}
                {/* <Route
                path='/payment'
                render={(props) => (
                  <PaymentScreen {...props} player={player} setPlayer={setPlayer} />
                )}
              /> */}
                <Route path='/payment' component={PaymentScreen} />
                <Route path='/teamPayment/:id' component={TeamPaymentScreen} />

                <Route
                  path='/dashboard'
                  render={(props) => (
                    <PlayerDashboard
                      {...props}
                      player={player}
                      setPlayer={setPlayer}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  )}
                />

                <Route
                  path='/pricing'
                  render={(props) => (
                    <Pricing {...props} player={player} setPlayer={setPlayer} />
                  )}
                />

                <Route
                  path='/pricing/:id'
                  // render={(props) => (
                  //   <Pricing {...props} team={team} setTeam={setTeam} />
                  // )}
                  component={Pricing}
                />

                <Route
                  path='/search'
                  render={(props) => (
                    <Search {...props} player={player} setPlayer={setPlayer} />
                  )}
                />

                <Route
                  path='/teamDashboard/:id'
                  render={(props) => (
                    <TeamDashboard {...props} setTeam={setTeam} />
                  )}
                />

                <Route
                  path='/team/:id'
                  render={(props) => (
                    <TeamScreen
                      {...props}
                      player={player}
                      team={team}
                      setTeam={setTeam}
                      child={store}
                      setChild={setStore}
                      loaded={storeLoaded}
                      setLoaded={setStoreLoaded}
                    />
                  )}
                />
                <Route
                  path='/teamProfile/:id'
                  render={(props) => (
                    <TeamProfileScreen
                      {...props}
                      team={team}
                      setTeam={setTeam}
                      child={store}
                      setChild={setStore}
                      loaded={storeLoaded}
                      setLoaded={setStoreLoaded}
                    />
                  )}
                />
              </Switch>
            </ScrollToTop>
            <div className='flex-auto'></div>
            <Footer showFooterLogo={showFooterLogo} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
