import React from 'react';
import {puppyList} from './data.js';
import {useState} from  'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies);
  return (
    <>
      <div>
       
      </div>
    </>
  )
}

export default App
