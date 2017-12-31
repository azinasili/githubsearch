import axios from 'axios';

function resolvedGetUsers(repsonse) {
  return {
    type: 'RESOLVED_GET_USERS',
    payload: repsonse.data.items,
  };
}

function errorGetUsers(error) {
  return {
    type: 'ERROR_GET_USERS',
    payload: error.response.data,
  };
}

export default function getUsers(user) {
  return (dispatch) => {
    axios.get(`https://api.github.com/search/users?q=${user}`)
      .then((response) => dispatch(resolvedGetUsers(response)))
      .catch((error) => dispatch(errorGetUsers(error)));
  };
}
