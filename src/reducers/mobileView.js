const MOBILE_VIEW_DEFAULTS = [
  {title: 'Users', id: 1, selected: true},
  {title: 'Repos', id: 2, selected: false},
];

function mobileView(state = MOBILE_VIEW_DEFAULTS, action) {
  switch(action.type) {
    case 'SWITCH_TO_USER':
      return state.map(view => (view.id === action.payload) ? {...view, selected: !view.selected} : view);
    case 'SWITCH_TO_REPOS':
      return state.map(view => (view.id === action.payload) ? {...view, selected: !view.selected} : view);
    default:
      return state;
  }
}

export default mobileView;
