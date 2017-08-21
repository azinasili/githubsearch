const searchDefaults = {
  string: '',
  value: '',
}

function search(state = searchDefaults, action) {
  switch (action.type) {
    case 'SEARCH_STRING':
      return {
        ...state,
        string: action.payload,
      }
    case 'SEARCH_VALUE':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default search;
