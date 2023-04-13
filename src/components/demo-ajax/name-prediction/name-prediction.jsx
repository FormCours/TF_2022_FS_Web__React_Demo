import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchNameAge, fetchNameGender } from '../../../api/name.api';

const NamePrediction = ({ name }) => {
  const [isloading, setLoading] = useState(true);
  const [dataAge, setDataAge] = useState(null);
  const [dataGenre, setDataGenre] = useState(null);
  const [onError, setError] = useState(false);

  useEffect(() => {

    Promise.all([fetchNameAge(name), fetchNameGender(name)])
      .then(([data1, data2]) => {
        setDataAge(data1);
        setDataGenre(data2);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    return () => {
      setLoading(true);
      setError(false);
    };
  }, [name]);


  return (
    <div>
      {(isloading) ? (
        <LoadingScreen />
      ) : (onError) ? (
        <ErrorScreen />
      ) : (dataAge && dataGenre) ? (
        <ReponseScreen {...dataAge} {...dataGenre} />
      ) : (
        <p>Aucune donnée...</p>
      )}
    </div>
  );
};

const ReponseScreen = ({ name, country, age, gender, genderProba }) => (
  <div>
    <p>Prédiction pour le nom {name.toLocaleUpperCase()} ({country})</p>
    <p> - Age : {age} ans.</p>
    <p> - Sexe : {gender} ({genderProba} %)</p>
  </div>
);

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