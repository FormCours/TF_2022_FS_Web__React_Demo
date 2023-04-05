import PropTypes from 'prop-types';

const DateFrench = ({ date, className, style }) => {

  const dateFormatted = (new Date(date)).toLocaleDateString('fr', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <span className={className} style={style}>{dateFormatted}</span>
  );
};

DateFrench.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default DateFrench;