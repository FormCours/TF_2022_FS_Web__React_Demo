import { useState } from "react"
import SearchBar from "../../components/demo-ajax/search-bar/search-bar";
import Liveboard from "../../components/demo-ajax/liveboard/liveboard";

export default function DemoAjax() {
	const [searchStation, setStation] = useState('');

	// Méthode envoyer aux enfants pour mettre à jour le parent
	const handleStation = (station) => {
		setStation(station);
	}

	return <>
			<SearchBar onSearch={handleStation} />
			{ searchStation && <Liveboard station={searchStation} /> }
	</>
}
