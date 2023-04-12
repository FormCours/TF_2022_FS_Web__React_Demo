import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchNameAge, fetchNameGender } from '../../../api/name.api';

const NamePrediction = ({name}) => {
  const [isloadingAge, setLoadingAge] = useState(true);
  const [isloadingGenre, setLoadingGenre] = useState(true);
  const [dataAge, setDataAge] = useState(null);
  const [dataGenre, setDataGenre] = useState(null);
  const [onErrorAge, setErrorAge] = useState(false);
  const [onErrorGenre, setErrorGenre] = useState(false);

  useEffect(() => {
    fetchNameAge(name)
      .then(data => setDataAge(data))
      .catch(() => setErrorAge(true))
      .finally(() => setLoadingAge(false));

      return () => {
        setLoadingAge(true);
        setErrorAge(false);
      }
  }, [name]);

  useEffect(() => {
    setLoadingAge(true);
    setErrorAge(false);

    fetchNameGender(name)
      .then(setDataGenre)
      .catch(() => setErrorGenre(true))
      .finally(() => setLoadingGenre(false))
  }, [name]);


  return (
    <div>
      {(isloadingAge || isloadingGenre) ? (
        <LoadingScreen />
      ) : (onErrorAge || onErrorGenre) ? (
        <ErrorScreen />
      ) : (dataAge && dataGenre) ? (
        <ReponseScreen {...dataAge} {...dataGenre} />
      ) : (
        <p>Aucune donnée...</p>
      )}
    </div>
  );
};

const ReponseScreen = ({name, country, age, gender, genderProba}) => (
  <div>
    <p>Prédiction pour le nom {name.toLocaleUpperCase()} ({country})</p>
    <p> - Age : {age} ans.</p>
    <p> - Sexe : {gender} ({genderProba} %)</p>
  </div>
)

const LoadingScreen = () => (
  <p>Chargement...</p>
);

const ErrorScreen = () => (
  <p>Une erreur s'est produite (╯°□°）╯︵ ┻━┻ </p>
);

NamePrediction.propTypes = {
  name: PropTypes.string.isRequired
};

export default NamePrediction;