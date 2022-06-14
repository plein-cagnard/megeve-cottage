import API from './api';

export const getEntities = (name) => {
  API.get(`${name}`).then((response) => {
    console.log(response);
    return response;
  });
}

export const getEntity = (name, id = '') => {
  API.get(`${name}/${id}`).then((response) => {
    console.log(response);
    return response;
  });
}

export const getSingle = (name) => {
  API.get(`${name}`).then((response) => {
    console.log(response);
    return response;
  });
}
