
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import index from '../reducers';

export const store = createStore(index, {}, applyMiddleware(logger, promise))
