import React, { useEffect, useState } from "react";
import "./App.css"; // Import CSS file for styling

const DancingMonkeysOnRoad = () => {
  // Create a list of dancing monkeys with random positions and speeds
  const [monkeys, setMonkeys] = useState([]);

  useEffect(() => {
    const numberOfMonkeys = 5; // Set how many monkeys you want
    const newMonkeys = [];

    // Create a list of monkey objects with random speeds and starting positions
    for (let i = 0; i < numberOfMonkeys; i++) {
      newMonkeys.push({
        id: i,
        speed: Math.random() * 3 + 2, // Random speed between 2 and 5
        offset: Math.random() * 100, // Random starting position (offset)
      });
    }

    setMonkeys(newMonkeys); // Set the monkeys state
  }, []);

  return (
    <div className="road-container">
      {monkeys.map((monkey) => (
        <div
          key={monkey.id}
          className="monkey"
          style={{
            animationDuration: `${monkey.speed}s`,
            animationDelay: `${monkey.offset}s`, // Create different starting times for each monkey
          }}
        >
          {/* Replace with the actual dancing monkey GIF URL */}
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG12bTVqeDdvN3k3dndlemlnYmk5bjF2dWx5bnhwOGp4c2t0MnJqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5QQpgP8qmuqNa8bW0R/giphy.gif"
            alt="dancing monkey"
            className="monkey-gif"
          />
        </div>
      ))}
    </div>
  );
};

export default DancingMonkeysOnRoad;
