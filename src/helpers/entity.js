import API from './api';

export const getEntities = async (name) => {
  const res = await API.get(`${name}`);
  return res.data;
}

export const getEntity = async (name, id = '') => {
  const res = await API.get(`${name}/${id}`)
  return res.data;
}

export const getSingle = async (name) => {
  const res = await API.get(`${name}`);
  return res.data;
}
