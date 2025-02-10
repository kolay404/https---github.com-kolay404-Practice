import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev); // Toggle animation every 1 second
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="middle-finger-container">
      <span className={`middle-finger ${isAnimating ? "animate" : ""}`}>
        🖕
      </span>
    </div>
  );
};

export default App;
