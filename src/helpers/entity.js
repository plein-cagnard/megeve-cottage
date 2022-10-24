import API from './api';

export const getEntities = async (name, params = '', localisation) => {
  const res = await API.get(`${name}?locale=${localisation || 'en'}${params}`);
  return res.data;
}

export const getEntity = async (name, id = null, params = '') => {
  const res = await API.get(`${name}/${id}${params}`)
  return res.data;
}

export const getSingle = async (name, params = '', localisation) => {
  const res = await API.get(`${name}?locale=${localisation || 'en'}${params}`);
  return res.data;
}
