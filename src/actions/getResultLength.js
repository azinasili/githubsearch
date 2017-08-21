export function getUserResultLength(number) {
  return {
    type: 'USER_LENGTH',
    payload: number,
  }
}

export function getRepoResultLength(number) {
  return {
    type: 'REPO_LENGTH',
    payload: number,
  }
}
