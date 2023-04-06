import { useState } from "react";

const Multi3 = () => {

  const [multiplier, setMultiplier] = useState(1)

  const handleUp = () => {
    console.log('Avant set', multiplier);
    setMultiplier(multiplier => multiplier + 1);
    console.log('Après set', multiplier);
  }

  const handleDown = () =>  {
    setMultiplier(m => m - 1);
  }

  return (
    <div>
      {console.log('Render', multiplier)}
      <h3>{multiplier} x 3 = {multiplier * 3}</h3>
      <div>
        <button onClick={handleUp}>Next</button>
        <button onClick={handleDown}>Previous</button>
      </div>
    </div>
  )
};

export default Multi3;