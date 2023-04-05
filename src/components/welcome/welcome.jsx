import PropTypes from 'prop-types';
import style from './welcome.module.css';

const Welcome = ({ name }) => {

  // Traitement ... (Code JS)

  return (
    <h2>Bienvenue <span className={style['name']}>{name}</span></h2>
//  <h2>Bienvenue <span className={style.name}>{name}</span></h2>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

export default Welcome;