import React, { useEffect, useState } from "react";
import "./App.css"; // Import CSS file for styling

const CarsOnRoad = () => {
  // Create a list of cars with random positions and speeds
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const numberOfCars = 5; // Set how many cars you want
    const newCars = [];

    // Create a list of car objects with random speeds and starting positions
    for (let i = 0; i < numberOfCars; i++) {
      newCars.push({
        id: i,
        speed: Math.random() * 3 + 2, // Random speed between 2 and 5
        offset: Math.random() * 100, // Random starting position (offset)
      });
    }

    setCars(newCars); // Set the cars state
  }, []);

  return (
    <div className="road-container">
      {cars.map((car) => (
        <div
          key={car.id}
          className="car"
          style={{
            animationDuration: `${car.speed}s`,
            animationDelay: `${car.offset}s`, // Create different starting times for each car
          }}
        >
        <img
            src="https://www.icegif.com/wp-content/uploads/2022/11/icegif-818.gif" // Replace this with your GIF URL
            alt="car"
            className="car-gif"
        />
          🚗
        </div>
      ))}
    </div>
  );
};

export default CarsOnRoad;
