import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import vehicleReducer from '../modules/reducer'
import { sagaMiddleware } from './middleware';
import saga from '../modules/sagas';

export default createStore(
  vehicleReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(saga)
