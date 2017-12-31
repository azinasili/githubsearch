const SEARCH_DEFAULTS = {
  string: '',
  value: '',
}

export default function search(state = SEARCH_DEFAULTS, action) {
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
