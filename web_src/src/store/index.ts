import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import playlists from './playlists/reducers';

const rootReducer = combineReducers({
  playlists
})

export type RootState = ReturnType<typeof rootReducer>;
export default createStore(rootReducer, applyMiddleware(thunk));


