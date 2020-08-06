import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import latestBlocks from './reducer/latest-blocks'
import { sagaMiddleware } from './middleware';
import saga from '../modules/sagas';

export default createStore(
  combineReducers({
    latestBlocks,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(saga)
