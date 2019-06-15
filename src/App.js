import React from 'react';
import Main from './components/main';
import SideBar from './components/sidebar';
import Thread1 from './components/threads/Thread1';
import Thread2 from './components/threads/Thread2';
import Top from './components/top'
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

// todo: マテリアルUI
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <SideBar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
