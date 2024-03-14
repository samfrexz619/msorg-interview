import React from 'react';
import CardIcon from './CardIcon';

interface Props {
  cardTitle: string;
  icon: string;
}

const Card: React.FC<Props> = (props) => {
  const { cardTitle, icon } = props
  return (
    <div className='card'>
      <div className='w-full flex flex-col items-center'>
        <CardIcon name={icon} />
        <p>{cardTitle}</p>
      </div>
    </div>
  );
}

export default Card;
