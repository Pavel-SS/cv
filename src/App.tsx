import React from 'react';
import 'normalize.css';
import { Header } from './header/Header';
import { Main } from './main/Main'
//Style
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
