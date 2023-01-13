import axios from 'axios';

const CAT_URL = process.env.REACT_APP_CAT_URL;

export async function getCatFacts(){
  const res = await axios({
    method: 'GET',
    url: CAT_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await res.data;
}