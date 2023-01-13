import axios from 'axios';

const url = 'https://catfact.ninja/fact'

export async function getCatFacts(){
  const res = await axios({
    method: 'GET',
    url: url,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await res.data;
}