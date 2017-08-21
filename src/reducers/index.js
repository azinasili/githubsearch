import { combineReducers } from 'redux';
import selectOptions from './selectOptions';
import users from './users';
import repos from './repos';
import search from './search';
import searchResultLength from './searchResultLength';
import defaultMessage from './defaultMessage';

const reducers = combineReducers({
  selectOptions,
  users,
  repos,
  search,
  searchResultLength,
  defaultMessage,
});

export default reducers;
