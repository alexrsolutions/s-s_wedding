import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  ScrollingProvider,
} from 'react-scroll-section';

function App() {
  return (
    <div className="App">
      <ScrollingProvider>
        <Home/>
      </ScrollingProvider>
    </div>
  );
}

export default App;
