import { useState, useEffect } from 'react';
import { fetchNameAge, fetchNameGender } from '../api/name.api';

export const useFetchNameInfo = (name) => {

  const [isloading, setLoading] = useState(true);
  const [dataAge, setDataAge] = useState(null);
  const [dataGenre, setDataGenre] = useState(null);
  const [onError, setError] = useState(false);

  useEffect(() => {

    Promise.all([fetchNameAge(name), fetchNameGender(name)])
      .then(([data1, data2]) => {
        setDataAge(data1);
        setDataGenre(data2);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    return () => {
      setLoading(true);
      setError(false);
    };
  }, [name]);

  // Création d'un objet data qui contient les props des 2 objets.
  // Exemple : 
  // dataAge = {age:68, country_id:'BE', name:'pavel'}
  // dataGenre = {country_id:'BE', gender:'male', name:'pavel', probability:0.98}

  const data = {...dataAge, ...dataGenre};
  // data = {age:68, country_id:'BE', gender:'male', name:'pavel', probability:0.98}

  return [isloading, onError, data];
};