import axios from "axios";

export const fetchNameAge = (name) => {
  return axios.get('https://api.agify.io/', {
    params: {
      name,
      country_id: 'be'
    }
  }).then(({data}) => {
    console.log(data);
    
    return {
    name: data.name,
    age: data.age,
    country: data.country_id
  }});
}; 

export const fetchNameGender = (name) => {
  return axios.get('https://api.genderize.io/', {
    params: {
      name,
      country_id: 'be'
    }
  }).then(({data}) => ({
    name: data.name,
    country: data.country_id,
    gender: data.gender,
    genderProba: Math.round(data.probability * 100)
  }))
};