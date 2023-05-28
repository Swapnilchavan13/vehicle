import React, { useState, useEffect } from "react";
import "../Styles/simulation.css";

const Simulation = () => {
  const [vehicles, setVehicles] = useState([]);
  const [initialVehicles, setInitialVehicles] = useState([]);
  const containerWidth = 962;
  const containerHeight = 302;
  const [simulationRunning, setSimulationRunning] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/vehicle")
      .then((response) => response.json())
      .then((data) => {
        const formattedVehicles = data.map((vehicle) => ({
          id: vehicle.id,
          x: parseInt(vehicle.positionX),
          y: parseInt(vehicle.positionY),
          direction: vehicle.direction.toLowerCase(),
          speed: parseInt(vehicle.speed),
        }));
        setVehicles(formattedVehicles);
        setInitialVehicles(formattedVehicles);
      })
      .catch((error) => {
        console.error("Error fetching vehicle data:", error);
      });
  }, []);

  const startSimulation = () => {
    setSimulationRunning(true);
  };

  const stopSimulation = () => {
    setSimulationRunning(false);
  };

  const resetSimulation = () => {
    setVehicles(initialVehicles);
    setSimulationRunning(false);
  };

  useEffect(() => {
    if (simulationRunning) {
      const updateVehicles = () => {
        setVehicles((prevVehicles) => {
          const updatedVehicles = prevVehicles.map((vehicle) => {
            let { x, y, direction, speed } = vehicle;

            switch (direction) {
              case "toward":
                x += speed;
                break;
              case "upward":
                y -= speed;
                break;
              case "downward":
                y += speed;
                break;
              case "backward":
                x -= speed;
                break;
              default:
                break;
            }

            if (x > containerWidth || y > containerHeight || x < 0 || y < 0) {
              vehicle.hidden = true;
            }

            return { ...vehicle, x, y };
          });

          return updatedVehicles;
        });
      };

      const interval = setInterval(updateVehicles, 16);

      return () => clearInterval(interval);
    }
  }, [simulationRunning, containerWidth, containerHeight]);

  const getVehicleColor = (direction) => {
    switch (direction) {
      case "toward":
        return "blue";
      case "upward":
        return "green";
      case "downward":
        return "red";
      case "backward":
        return "yellow";
      default:
        return "blue";
    }
  };

   return (
    <div>
      <div id="sbuttons">
        <button onClick={startSimulation}>Start Simulation</button>
        <button onClick={stopSimulation}>Stop Simulation</button>
        <button onClick={resetSimulation}>Reset</button>
      </div>
      <div id="container">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="vehicle"
            style={{
              left: vehicle.x,
              top: vehicle.y,
              display: vehicle.hidden ? "none" : "block",
              backgroundColor: getVehicleColor(vehicle.direction),
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
