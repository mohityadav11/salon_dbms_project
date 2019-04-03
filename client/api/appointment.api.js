import axios from 'axios';

export const createAppointment = (token, appointment) => {
  return axios ({
    method: 'post',
    url: '/api/appointment',
    data: JSON.stringify (appointment),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }).then (({data}) => {
    console.log (data);
  });
};
