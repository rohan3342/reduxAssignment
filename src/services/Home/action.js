import { GET_DATA, SET_DATA, UPDATE_DATA, DELETE_DATA } from './actionTypes';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getData = () => async dispatch => {
  const response = await fetch(URL);
  const response_data = await response.json();
  dispatch({
    type: GET_DATA,
    payload: response_data,
  });
};

export const setData = newValue => async dispatch => {
  console.log('INSIDE HOME ACTION setData : newValue => ', newValue);
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(newValue),
  });
  const response_data = await response.json();
  if (response.status === 201) {
    dispatch({
      type: SET_DATA,
      payload: { ...newValue, ...response_data },
    });
  }
};

export const updateData = newValue => async dispatch => {
  console.log('INSIDE HOME ACTION updateData : newValue => ', newValue);
  const { id } = newValue;
  const response = await fetch(URL.concat('/', id), {
    method: 'PUT',
    body: JSON.stringify(newValue),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response_data = await response.json();
  dispatch({
    type: UPDATE_DATA,
    payload: response_data,
  });
};

export const deleteData = id => async dispatch => {
  console.log('DATA DELETED FROM GOLOBAL STATE!!');
  const response = await fetch(URL.concat('/', id), {
    method: 'DELETE',
  });
  if (response.status === 200) {
    dispatch({
      type: DELETE_DATA,
      payload: id,
    });
  }
};
