import cartProductsReducer from './reducers/index';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default store = createStore(cartProductsReducer, applyMiddleware(thunk));


