import React from 'react';
import 'normalize.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';

//Style
import '../src/style/GeneralStyle.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
