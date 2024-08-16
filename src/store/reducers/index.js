import { combineReducers } from 'redux'
import commonReducer from './common.reducer';
import userReducer from './user.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer
})
export default rootReducer;
