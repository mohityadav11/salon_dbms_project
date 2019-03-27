import axios from 'axios';

export const create = (salon, token) => {
  return axios ({
    method: 'post',
    url: '/api/salon',
    data: JSON.stringify (salon),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }).then (({data}) => {
    console.log (data);
  });
};

export const list = (token, limit) => {
  if (limit) {
    return axios ({
      method: 'get',
      url: `/api/salon?limit=${limit}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then (({data}) => {
      return data.salons;
    });
  } else {
    return axios ({
      method: 'get',
      url: `/api/salon`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then (({data}) => {
      return data.salons;
    });
  }
};
