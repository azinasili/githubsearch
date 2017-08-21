import axios from 'axios';

export function getUsers(user) {
  return (dispatch) => {
    axios.get(`https://api.github.com/search/users?q=${user}`)
      .then((response) => dispatch(resolvedGetUsers(response)))
      .catch((error) => dispatch(errorGetUsers(error)));
  };
}

export function resolvedGetUsers(repsonse) {
  return {
    type: 'RESOLVED_GET_USERS',
    payload: repsonse.data.items,
  };
}

export function errorGetUsers(error) {
  return {
    type: 'ERROR_GET_USERS',
    payload: error.response.data,
  };
}
