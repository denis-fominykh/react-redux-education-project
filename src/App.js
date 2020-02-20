import React from 'react';
import './App.scss';

import { Posts } from './components/Posts';
import { Postform } from './components/Postform';

export function App() {
  return (
    <div className='App'>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}
