import { combineReducers, Reducer } from 'redux'

import { fileReaderReducer } from '../containers/file-reader/reducers';

const reducers = combineReducers({
  fileReaderReducer,
})

export default reducers;
