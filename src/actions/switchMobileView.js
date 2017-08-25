export function switchToUsers(id) {
  return {
    type: 'SWITCH_TO_USER',
    payload: id,
  };
}

export function switchToRepos(id) {
  return {
    type: 'SWITCH_TO_REPOS',
    payload: id,
  };
}
