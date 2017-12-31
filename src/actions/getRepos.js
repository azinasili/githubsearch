import axios from 'axios';

function resolvedGetRepos(repsonse) {
  return {
    type: 'RESOLVED_GET_REPOS',
    payload: repsonse.data.items,
  };
}

function errorGetRepos(error) {
  return {
    type: 'ERROR_GET_REPOS',
    payload: error.response.data,
  };
}

export default function getRepos(repo) {
  return (dispatch) => {
    axios.get(`https://api.github.com/search/repositories?q=${repo}`)
      .then((response) => dispatch(resolvedGetRepos(response)))
      .catch((error) => dispatch(errorGetRepos(error)));
  };
}
