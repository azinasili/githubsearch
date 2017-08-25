const MOBILE_VIEW_DEFAULTS = {
  users: true,
  repos: false,
}

function mobileView(state = MOBILE_VIEW_DEFAULTS, action) {
  switch(action.type) {
    case 'SWITCH_TO_USER':
      return {
        ...state,
        users: true,
        repos: false,
      };
    case 'SWITCH_TO_REPOS':
      return {
        ...state,
        users: false,
        repos: true,
      };
    default:
      return state;
  }
}

export default mobileView;
