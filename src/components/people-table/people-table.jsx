import PropTypes from 'prop-types';
import DateFrench from '../date-french/date-french';

const PeopleTableHeader = () => (
  <thead>
    <tr>
      <th>Prénom</th>
      <th>Nom</th>
      <th>Date de naissance</th>
    </tr>
  </thead>
);

const PeopleTableRow = ({ firstname, lastname, birthdate }) => (
  <tr>
    <td>{firstname}</td>
    <td>{lastname}</td>
    <td>
      {birthdate && <DateFrench date={birthdate} />}
    </td>
  </tr>
);

const PeopleTable = ({ people }) => {
  return (
    <>
      <h3>Table de personne</h3>
      <table>
        <PeopleTableHeader />
        <tbody>
          {people.map(person => (
            <PeopleTableRow key={person.id} {...person} />
          ))}
        </tbody>
      </table>
    </>
  );
};

PeopleTable.defaultProps = {
  people: []
};

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    birthdate: PropTypes.string
  }))
};

export default PeopleTable;