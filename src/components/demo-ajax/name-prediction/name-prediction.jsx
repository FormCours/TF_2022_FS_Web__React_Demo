import PropTypes from 'prop-types';
import { useFetchNameInfo } from '../../../hooks/name-info.hook';

const NamePrediction = ({ name }) => {

  const [isloading, onError, data] = useFetchNameInfo(name);

  return (
    <div>
      {(isloading) ? (
        <LoadingScreen />
      ) : (onError) ? (
        <ErrorScreen />
      ) : (data) ? (
        <ReponseScreen {...data} />
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