import React from 'react';

const FruitList = ({ fruits }) => {

  // Création d'un tableau de donnée dans le format JSX
  // avec la copie des valeurs du tableau "fruit".
  const fruitsReact = fruits.map(
    (fruit) => React.createElement('li', { key: fruit.id}, fruit.name)
  );

  console.log('Liste initial', fruits);
  console.log('Liste transformé en React Element', fruitsReact);

  return React.createElement(
    'div', 
    null,
    React.createElement(
      'h3',
      null,
      'Demo List Element React'
    ),
    React.createElement(
      'ul',
      null,
      fruitsReact
    )
  );
};

export default FruitList;