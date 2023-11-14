// Modified App.jsx
import React, { useEffect, useState } from 'react';
import { puppyList, getImage } from './data.js';
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  useEffect(() => {
    const updatePuppyImage = async (puppyId) => {
      const image = await getImage();
      setPuppies((prevPuppies) => {
        const updatedPuppies = [...prevPuppies];
        const index = updatedPuppies.findIndex((puppy) => puppy.id === puppyId);
        if (index !== -1) {
          updatedPuppies[index] = { ...updatedPuppies[index], img: image };
        }
        return updatedPuppies;
      });
    };

    // Fetch random dog image for each puppy
    puppies.forEach((puppy) => {
      updatePuppyImage(puppy.id);
    });
  },);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      <div>
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
              <li>Picture:<img src={featuredPup.img} alt={featuredPup.name} /></li>
            </ul>
          </div>
        )}

        {puppies.map((puppy) => (
          <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
