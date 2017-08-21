const USERS_DEFAULT = {
  items: [],
  fetching: false,
  fetched: false,
  error: null,
};

function users(state = USERS_DEFAULT, action) {
  switch (action.type) {
    case 'RESOLVED_GET_USERS':
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload,
        error: null,
      };
    case 'ERROR_GET_USERS':
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default users;
