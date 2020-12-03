import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getFavs } from '../../queries';
import PetPhoto from '../PetPhoto';
import './style.scss';

const ListOfFavs = () => {
  const { data, loading, error } = useQuery(getFavs, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return (
      <ul>
        {[1, 2, 3, 4].map((photoCard) => <PetPhoto key={photoCard} loading />)}
      </ul>
    );
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <ul className="list">
      {data?.favs.map((photoCard) => (
        <li className="list__item">
          <PetPhoto
            key={photoCard.id}
            src={photoCard.src}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListOfFavs;
