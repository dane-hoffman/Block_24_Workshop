// Modified App.jsx
import React, { useEffect, useState } from 'react';
import { puppyList, getImage } from './data.js';
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [selectedPuppy, setSelectedPuppy] = useState(null);

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
  }, []); // Empty dependency array to run once when the component mounts

  const handlePuppyClick = (puppyId) => {
    setFeatPupId(puppyId);
    setSelectedPuppy(puppies.find((pup) => pup.id === puppyId));
  };

  const handleBackClick = () => {
    setFeatPupId(null);
    setSelectedPuppy(null);
  };

  return (
    <>
      <div>
        {selectedPuppy ? (
          <div>
            <h2>{selectedPuppy.name}</h2>
            <ul>
              <li>Age: {selectedPuppy.age}</li>
              <li>Email: {selectedPuppy.email}</li>
              <li>Picture:<img src={selectedPuppy.img} alt={selectedPuppy.name} /></li>
            </ul>
            <button onClick={handleBackClick}>Back</button>
          </div>
        ) : (
          puppies.map((puppy) => (
            <p onClick={() => handlePuppyClick(puppy.id)} key={puppy.id}>
              {puppy.name}
            </p>
          ))
        )}
      </div>
    </>
  );
}

export default App;
