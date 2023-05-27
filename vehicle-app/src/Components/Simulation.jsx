import React, { useState, useEffect } from 'react';

const Container = {
  backgroundColor: 'black',
  width: '962px',
  height: '302px',
  border: '1px solid black',
  position: 'relative',
  overflow: 'hidden',
  backgroundSize: '68.5px 50px',
  backgroundImage: `
    linear-gradient(to right, green 1px, transparent 1px),
    linear-gradient(to bottom, green 1px, transparent 1px)
  `,
};

const Vehicle = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  textAlign: 'center',
  backgroundColor: 'blue',
  position: 'absolute',
};

const Simulation = () => {
  const [vehicles, setVehicles] = useState([]);
  const containerWidth = 962;
  const containerHeight = 302;
  const [simulationRunning, setSimulationRunning] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/vehicle') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        const formattedVehicles = data.map(vehicle => ({
          id: vehicle.id,
          x: parseInt(vehicle.positionX),
          y: parseInt(vehicle.positionY),
          direction: vehicle.direction.toLowerCase(),
          speed: parseInt(vehicle.speed),
        }));
        setVehicles(formattedVehicles);
      })
      .catch(error => {
        console.error('Error fetching vehicle data:', error);
      });
  }, []);

  const startSimulation = () => {
    setSimulationRunning(true);
  };

  const stopSimulation = () => {
    setSimulationRunning(false);
  };

  useEffect(() => {
    if (simulationRunning) {
      const updateVehicles = () => {
        setVehicles(prevVehicles => {
          const updatedVehicles = prevVehicles.map(vehicle => {
            let { x, y, direction, speed } = vehicle;

            switch (direction) {
              case 'toward':
                x += speed;
                break;
              case 'upward':
                y -= speed;
                break;
              case 'downward':
                y += speed;
                break;
              case 'backward':
                x -= speed;
                break;
              default:
                break;
            }

            // Check if the vehicle is outside the container
            if (x > containerWidth || y > containerHeight || x < 0 || y < 0) {
              vehicle.hidden = true;
            }

            return { ...vehicle, x, y };
          });

          return updatedVehicles;
        });
      };

      const interval = setInterval(updateVehicles, 16); // Update vehicles every 16 milliseconds (approximately 60fps)

      return () => clearInterval(interval);
    }
  }, [simulationRunning, containerWidth, containerHeight]);

  return (
    <div>
         <div>
        <button onClick={startSimulation}>Start Simulation</button>
        <button onClick={stopSimulation}>Stop Simulation</button>
      </div>
      <div style={Container}>
        {vehicles.map(vehicle => (
          <div
            key={vehicle.id}
            style={{
              ...Vehicle,
              left: vehicle.x,
              top: vehicle.y,
              display: vehicle.hidden ? 'none' : 'block',
            }}
          >
            {vehicle.id}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Simulation;
