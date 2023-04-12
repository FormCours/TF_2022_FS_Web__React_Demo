import { useState } from "react"
import SearchBar from "../../components/search-bar/search-bar";
import Liveboard from "../../components/demo-ajax/liveboard/liveboard";
import NamePrediction from "../../components/demo-ajax/name-prediction/name-prediction";

export default function DemoAjax() {
	const [searchStation, setStation] = useState('');
	const [name, setName] = useState('');

	// Méthode envoyer aux enfants pour mettre à jour le parent
	const handleStation = (station) => {
		setStation(station);
	}
	const handleName = (name) => {
		setName(name);
	}

	return <>
			<h3>Irail</h3>
			<SearchBar label='Station' onSearch={handleStation} />
			{ searchStation && <Liveboard station={searchStation} /> }

			<h3>Agify & Genderize</h3>
			<SearchBar label='Nom' onSearch={handleName}
				btnText={'Recherche l\'age et le genre'}
				/>
			{ name && <NamePrediction name={name} />}
	</>
}
