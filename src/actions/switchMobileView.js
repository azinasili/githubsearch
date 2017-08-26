export function switchView(id) {
  return {
    type: 'SWITCH_VIEW',
    payload: id,
  };
}
