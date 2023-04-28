import {useEffect, useState} from 'react';

export const useMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 992;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
