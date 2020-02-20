import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './App.scss';

import { Posts } from './components/Posts';
import { Postform } from './components/Postform';

const store = createStore(() => [], {}, applyMiddleware());

export function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}
