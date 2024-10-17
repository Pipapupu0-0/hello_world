import React from 'react';
import MyStack from './components/Navigation_screens';
import reducers from './components/reducers/reducers';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

export default function App() {
  const store = configureStore({reducer: reducers});

  return(
    <Provider store={store}>
        <MyStack/>
    </Provider>
  );
}


