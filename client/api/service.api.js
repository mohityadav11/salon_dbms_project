import axios from 'axios';

export const create = (token, service) => {
  return axios ({
    method: 'post',
    url: '/api/service',
    data: JSON.stringify (service),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }).then (({data}) => {
    console.log (data);
  });
};

export const listServices = (token, salonId) => {
  return axios ({
    method: 'get',
    url: `/api/service?salonId=${salonId}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }).then (({data}) => {
    return data.services;
  });
};
