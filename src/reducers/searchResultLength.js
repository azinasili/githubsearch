import selectOptions from './selectOptions';

const resultLengthDefaults = {
  users: selectOptions()[0],
  repos: selectOptions()[0],
}

function searchResultLength(state = resultLengthDefaults, action) {
  switch (action.type) {
    case 'USER_LENGTH':
      return {
        ...state,
        users: action.payload,
      }
    case 'REPO_LENGTH':
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};

export default searchResultLength;
