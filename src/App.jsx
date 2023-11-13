import React from 'react';
import {puppyList} from './data.js';
import {useState} from  'react';


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList:", puppyList);
  return (
    <>
      <div>
        <p>{featPupId}</p>
       {
        puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
       }
      </div>
    </>
  )
}

export default App
