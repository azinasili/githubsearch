import selectOptions from './selectOptions';

const RESULT_LENGTH_DEFAULT = {
  users: selectOptions()[0],
  repos: selectOptions()[0],
}

export default function searchResultLength(state = RESULT_LENGTH_DEFAULT, action) {
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
