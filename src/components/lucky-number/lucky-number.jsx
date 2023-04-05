import PropTypes from 'prop-types';

const LuckyNumber = ({nb}) => (
  <p>Nombre porte bonheur est {nb}</p>
);

LuckyNumber.defaultProps = {
  nb: 42
};

LuckyNumber.propTypes = {
  nb: PropTypes.number
};

export default LuckyNumber;