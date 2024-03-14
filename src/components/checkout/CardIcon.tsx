import React from 'react';

interface Props {
  name: string;
}

const CardIcon: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <span>
      {
        name === 'card'
          ? < svg width="32" height="32" viewBox="0 0 32 32">
            <use xlinkHref="/sprite.svg#card" />
          </svg>
          : name === 'bank'
            ? < svg width="38" height="38" viewBox="0 0 38 38">
              <use xlinkHref="/sprite.svg#bank" />
            </svg>
            : < svg width="32" height="32" viewBox="0 0 32 32">
              <use xlinkHref="/sprite.svg#trf" />
            </svg>
      }
    </span >
  );
}

export default CardIcon;
