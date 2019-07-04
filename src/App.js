import React from 'react';
import Main from './components/main';
import SideBar from './components/sidebar';
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
