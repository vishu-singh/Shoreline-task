import { GET_USERS } from '../../actionTypes';

import { getRequest } from '../../api';
import createBrowserHistory from '../../history';

export const getUsers = () => async dispatch => {
  try {
    const res = await getRequest(`users`);
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (err) {
    
  }
};


export const addProduct = async data => {
  try {
    const res = await getRequest(`locad/product/createNew`, data);
    
    return res;
  } catch (err) {
    
  }
};

