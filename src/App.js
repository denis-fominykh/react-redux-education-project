import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';

import { store } from './store';
import Posts from './components/Posts';
import Postform from './components/Postform';

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}
