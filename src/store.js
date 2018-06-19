import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reportReducer from './reducers/index'

const store = createStore(reportReducer, '', composeWithDevTools(applyMiddleware(thunk)))

export default store
