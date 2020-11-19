import { useState, useEffect } from 'react';

const useNearScreen = (ref) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);
  }, []);

  return show;
};

export default useNearScreen;
