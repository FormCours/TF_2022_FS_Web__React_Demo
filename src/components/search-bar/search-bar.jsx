import { useId } from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, label, btnText }) => {
	const { register, handleSubmit, reset } = useForm();
	const id = useId();

	const onSubmit = (data) => {
		onSearch(data.query.toLowerCase());
		reset();
	}

	return <form onSubmit={handleSubmit(onSubmit)}>
		<label htmlFor={id+'query'}>{label} : </label>
		<input id={id+'query'} type="text" {...register('query')} />

		<button type="submit">{btnText}</button>
	</form>
}

SearchBar.defaultProps = {
	label: '🔍',
	btnText : 'Rechercher'
}

SearchBar.propTypes = {
	label: PropTypes.string,
	btnText: PropTypes.string
}

export default SearchBar;
