import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers,createStore} from 'redux';


import {Provider} from 'react-redux';


import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/users-reducer';







const allReducers =combineReducers({
  products: productsReducer,
  user: userReducer
})


const store = createStore(allReducers,
  {
    products:[{name:'iPhone'}],
    user: 'Michael'
  },
  window.REDUX_DEVTOOLS_EXTENSION && window.devToolsExtension()

);
console.log(store.getState());


const updateUserAction = {
  type: 'updateUser',
  payload:{
    user: 'John'
  }
}


store.dispatch(updateUserAction)
console.log(store.getState());



// const action={
//   type: 'ChangeState',
//   payload:{
//     newState: 'New State'
//   }
// }

// store.dispatch(action)
// console.log(store.getState());








ReactDOM.render(
  <Provider store={store}><App  aRandomProps="whatever"/></Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
