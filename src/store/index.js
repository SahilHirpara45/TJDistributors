import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist'
import localStorage from 'redux-persist/es/storage'
import rootReducer from './reducers'

const persistConfig = {
  key: 'TJDistributors',
  storage: localStorage,
  whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)
export { store, persistor }
