import { List } from '@phosphor-icons/react';
import React, { useState, useLayoutEffect } from 'react';

function ScreenSizeChange() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener('resize', updateScreenSize);    
    
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <div className='w-full'>
      {isSmallScreen ? (
        <div className='flex items-center justify-end w-full h-12'>
          <button onClick={() => console.log('hello, react!')}>
            <List size={32} />
          </button>
        </div>
      ) : (
        <ul className='flex justify-between w-full h-full ml-4'>
          <li>Home</li>
          <li>Find a doctor</li>
          <li>Apps</li>
          <li>Testimonials</li>
          <li>About us</li>
        </ul>
      )}
    </div>
  );
}

export default ScreenSizeChange;
