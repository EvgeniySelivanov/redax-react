import {configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

const store= configureStore({
  reducer:{
    counter:counterReducer,
    todo:todoReducer,
  },
});

// const rootReducer= combineReducers({
//   counter:counterReducer,
//   todo:todoReducer
// });
// const store=configureStore({
//   reducer:rootReducer,
// })
export default store;