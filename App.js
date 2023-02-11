import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Output from './components/Output';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (

    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/Output" element={<Output />}>
          </Route>
          <Route exact path="/" element={<Input />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
