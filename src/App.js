import React from 'react';
import './App.css';
import Rating from "./components/Rating";
import FunctionClick from "./components/FunctionClick";

function App() {
  return (
    <div>
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
      <br />
      <FunctionClick />
    </div>
  );
}

export default App;
