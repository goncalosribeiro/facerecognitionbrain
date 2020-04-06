import React from 'react';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Imagelink from './components/Imagelink';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Imagelink />
      {/*<imageFaceRecognition />*/}
    </div>
  );
}

export default App;
