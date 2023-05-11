import { useState, useEffect } from 'react';

const useIsDesktopSize = () => {
  const [isDesktopSize, setIsDesktopSize] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const updateContent = () => {
      setIsDesktopSize(window.innerWidth > 1024);
    };

    window.addEventListener('resize', updateContent);
    return () => window.removeEventListener('resize', updateContent);
  }, []);

  return isDesktopSize
}

export default useIsDesktopSize;
