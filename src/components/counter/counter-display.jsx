import PropTypes from 'prop-types';

const CounterDisplay = ({message, countValue}) => (
  <div>
    <span>{message} : {countValue}</span>
  </div>
);

CounterDisplay.defaultProps = {
  message: 'Compteur'
};

CounterDisplay.propTypes = {
  message: PropTypes.string,
  countValue: PropTypes.number.isRequired
};

export default CounterDisplay;