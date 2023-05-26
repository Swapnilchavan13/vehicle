import React, { useState } from 'react';

const Graph = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [points, setPoints] = useState([]);

  const handlePlot = () => {
    if (x !== '' && y !== '') {
      const newPoint = { x: Number(x), y: Number(y) };
      setPoints([...points, newPoint]);
      setX('');
      setY('');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="x-input">X-axis:</label>
        <input
          id="x-input"
          type="number"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="y-input">Y-axis:</label>
        <input
          id="y-input"
          type="number"
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
      </div>
      <button onClick={handlePlot}>Plot</button>
      <div>
        <h2>Graph</h2>
        <svg width="400" height="400">
          <line x1="0" y1="200" x2="400" y2="200" stroke="black" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="black" />
          {points.map((point, index) => (
            <circle
              key={index}
              cx={200 + point.x}
              cy={200 - point.y}
              r="3"
              fill="blue"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Graph;
