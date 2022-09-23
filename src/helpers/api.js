import {API_URL, API_TOKEN} from '../config/constant';
import axios from 'axios';

export default axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {Authorization: `Bearer ${API_TOKEN}`}
});
