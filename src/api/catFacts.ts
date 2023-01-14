import axios from 'axios';
import { factModel } from '../models/factModel';

// use the cat url from .env file
const CAT_URL = process.env.REACT_APP_CAT_URL;

export async function getCatFacts(): Promise<factModel>{
  const res = await axios({
    method: 'GET',
    url: CAT_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await res.data;
}