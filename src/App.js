import React, { useState } from 'react';
import './App.css';
import BasicTableComponent from './components/suppression-list';
import HeaderComponent from './components/header-component';
import ProcessingQueueComponent from './components/processing-queue';
function App() {
  return (
    <div className="App">
    <HeaderComponent/>
    <BasicTableComponent />
    <ProcessingQueueComponent />
  </div>
  );
}

export default App;
