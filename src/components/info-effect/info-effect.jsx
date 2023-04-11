import { useEffect } from "react";

const InfoEffect = () => {
	// ON DESTROY / CLEAN UP EFFECT / NETTOYAGE + MOUNT
	useEffect(() => {
		console.log("COUCOU");
		return () => {
			console.log("BYE BYE");
		}
	}, []);

	return <h3>Info Effect Works</h3>
}

export default InfoEffect;
