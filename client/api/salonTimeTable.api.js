import axios from 'axios';

export const create = (token, salonTimeTable) => {
  return axios ({
    method: 'post',
    url: '/api/salonTimeTable',
    data: JSON.stringify (salonTimeTable),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }).then (({data}) => {
    console.log (data);
  });
};

export const listTimeTable = (token, salonId) => {
  return axios ({
    method: 'get',
    url: `/api/salonTimeTable?salonId=${salonId}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }).then (({data}) => {
    return data.timeTable;
  });
};
