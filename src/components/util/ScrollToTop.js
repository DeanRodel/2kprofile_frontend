import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
  const location = useLocation();
  const [lastLocation, setLastLocation] = useState('');

  useEffect(() => {
    if (lastLocation !== location.pathname) {
      document.getElementById('container').scrollTop = 0;
      setLastLocation(location.pathname);
    }
  }, [location, lastLocation]);

  return <>{props.children}</>;
};

export default ScrollToTop;
