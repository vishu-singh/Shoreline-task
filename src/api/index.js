import axios from 'axios';
const BaseUrl='https://jsonplaceholder.typicode.com/'

export const request = (path, data, method) => {
  return axios({
    method,
    url: `${BaseUrl}${path}`,
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    },
    data,
  });
};

export const getRequest = (path, data) => request(path, data, 'GET');
export const postRequest = (path, data) => request(path, data, 'POST');
export const deleteRequest = (path, data) => request(path, data, 'DELETE');
export const putRequest = (path, data) => request(path, data, 'PUT');
