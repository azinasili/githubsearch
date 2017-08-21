export function getSearchValue(string) {
  return {
    type: 'SEARCH_VALUE',
    payload: string,
  }
}

export function getSearchString(string) {
  const SEARCH_STRING = string.replace(/\s/g,'');

  return {
    type: 'SEARCH_STRING',
    payload: SEARCH_STRING,
  }
}
