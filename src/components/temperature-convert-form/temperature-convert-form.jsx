import { useState } from 'react';
import { useId } from 'react';
import style from './temperature-convert-form.module.css';

const TemperatureConvertForm = () => {

  // Génération d'un id pour définir l'id des elements HTML
  const id = useId();

  // Création de variable de state pour les valeurs du formulaire
  const [tempSource, setTempSource] = useState('');
  const [choice, setChoice] = useState('C-to-F');
  const [tempResult, setTempResult] = useState('');

  // Gestion du "submit" du formulaire
  const handleConvertSubmit = (e) => {
    e.preventDefault();

    const source = parseFloat(tempSource);
    let result;

    if(isNaN(source)) {
      result = 'La valeur est invalide ┗|｀O′|┛'
    }
    else if (choice === 'C-to-F') {
      result = ((source * 1.8) + 32).toFixed(2);
    } 
    else if(choice === 'F-to-C') {
      result = ((source - 32) / 1.8).toFixed(2);
    }
    else {
      result = 'Conversion non supportée (╯°□°）╯︵ ┻━┻'
    }

    setTempResult(result);
  };

  return (
    <form className={style['temp-convert']} onSubmit={handleConvertSubmit}>
      <div>
        <label htmlFor={id + 'temp'}>Temperature</label>
        <input type="text" id={id + 'temp'}
          value={tempSource}
          onChange={e => setTempSource(e.target.value)} />
      </div>
      <div>
        <label htmlFor={id + 'convert'}>Type de conversion</label>
        <select id={id + 'convert'}
          value={choice} onChange={e => setChoice(e.target.value)}>
          <option value='C-to-F'>Celsius vers Fahrenheit</option>
          <option value='F-to-C'>Fahrenheit vers Celsius</option>
        </select>
      </div>
      <div>
        <button type="submit">Convertir</button>
        <input type="text" value={tempResult} readOnly />
      </div>
    </form>
  );
};

export default TemperatureConvertForm;