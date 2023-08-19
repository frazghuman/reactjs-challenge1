import { combineReducers } from 'redux';
import monsterReducer from './monsterReducer';

const rootReducer = combineReducers({
  monster: monsterReducer,
});

export default rootReducer;
