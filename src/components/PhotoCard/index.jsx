import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './photoCard.scss';
import { AiOutlineHeart } from 'react-icons/ai';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ src, likes }) => {
  const ref = useRef(null);
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

  return (
    <article className="photoCard" ref={ref}>
      {show
      && (
      <>
        <div className="photoCard__image-container fade-in">
          <img src={src} alt="photoCard" className="photoCard__image" />
        </div>
        <button type="button" className="photoCard__button">
          <AiOutlineHeart size="24px" />
          {likes}
          {' '}
          likes!
        </button>
      </>
      )}
    </article>
  );
};

PhotoCard.propTypes = {
  src: PropTypes.string,
  likes: PropTypes.number,
};

PhotoCard.defaultProps = {
  src: DEFAULT_IMAGE,
  likes: 0,
};

export default PhotoCard;
