import axios from 'axios';

export const create = (token, staff) => {
  return axios ({
    method: 'post',
    url: '/api/staff',
    data: JSON.stringify (staff),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }).then (({data}) => {
    console.log (data);
  });
};
