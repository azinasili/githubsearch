const REPOS_DEFAULT = {
  items: [],
  fetching: false,
  fetched: false,
  error: null,
};

function repos(state = REPOS_DEFAULT, action) {
  switch (action.type) {
    case 'RESOLVED_GET_REPOS':
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload,
        error: null,
      };
    case 'ERROR_GET_REPOS':
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default repos;
