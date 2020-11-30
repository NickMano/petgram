import React from 'react';
import './style.scss';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { Link } from '@reach/router';

const TabBar = () => {
  const SIZE = '28px';

  return (
    <div className="tab-bar">
      <Link to="/" className="tab-bar__button">
        <AiOutlineHome size={SIZE} />
      </Link>
      <Link to="/favs" className="tab-bar__button">
        <AiOutlineHeart size={SIZE} />
      </Link>
      <Link to="/user" className="tab-bar__button">
        <BsPerson size={SIZE} />
      </Link>
    </div>
  );
};

export default TabBar;
