import { useEffect } from "react";
import { useState } from "react";

const CounterEffect = () => {
	const [count, setCount] = useState(+localStorage.getItem('counter'));
	const [isActive, setActive] = useState(false);

	// ON UPDATE
	// Effet sans dépendance => Il va se lancer à chaque changement de state
	useEffect(() => {
		console.log("RENDER");
	});

	// ON INIT
	useEffect(() => {
		console.log("ON INIT");

		// ON DESTROY
		return () => {
			// Logique de nettoyage
			console.log("ON DELETE");
			localStorage.setItem('counter', 0);
		}
	}, []);

	// ON UPDATE
	// Effet avec dépendance => Il va se lancer à chaque changement de count
	useEffect(() => {
		console.log("ON UPDATE");
		if (count === 10) {
			document.title = `Youpi`;
		} else {
			document.title = `Vous avez cliqué ${count} fois`;
		}
		localStorage.setItem('counter', count);
	}, [count]);

	return <>
		<h3 onClick={() => setActive(!isActive)} className={isActive ? 'active' : ''}>Counter Title</h3>
		<p>Count: { count }</p>
		<button onClick={() => setCount(count + 1)}>Add</button>
	</>
}

export default CounterEffect;
