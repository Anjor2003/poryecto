import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
 const { data } = await axios.get((url), {
  headers: {
   'x-rapidapi-host': 'bayut.p.rapidapi.com',
   'x-rapidapi-key': process.env.REACT_APP_KEY_PUBLIC_RAPID_API,
  }
 });

 return data;
}