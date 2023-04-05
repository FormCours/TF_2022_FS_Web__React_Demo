const FruitList = ({ fruits }) => {

  // Création d'un tableau de donnée dans le format JSX
  // avec la copie des valeurs du tableau "fruit".
  const fruitsJSX = fruits.map(
    (fruit) => <li key={fruit.id}>{fruit.name}</li>
  );

  console.log('Liste initial', fruits);
  console.log('Liste transformé en JSX', fruitsJSX);

  return (
    <div>
      <h3>Demo List JSX</h3>
      <ul>
        {/* ↓ Variable qui contient une collection d'element JSX */}
        {fruitsJSX}
      </ul>
    </div>
  );
};

export default FruitList;