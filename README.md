# Simulation Application - Technical Challenge

## Description
The React Scenario Simulation App is a web application built using React.js that allows users to create, display, update, and delete scenarios and vehicles. A scenario can have multiple vehicles, and the vehicles can be moved within a graph container based on the specified parameters.

## Features
- Create, display, update, and delete scenarios.
- Create, display, update, and delete vehicles within a scenario.
- Perform simulations by moving vehicles based on their direction and speed.
- Hide vehicles that go outside the graph container during the simulation.
- Validate vehicle positions to ensure they do not exceed the container size.

## Technologies Used
- React.js: A JavaScript library for building user interfaces.
- CSS: Custom CSS styles have been applied to create the simulation graph.
- Fetch API: Used to retrieve vehicle data from the provided API.
- JSON Server: Simple JSON-based database server for testing purposes.

## Getting Started
To run the simulation application locally, follow these steps:

1. Clone the repository: `https://github.com/Swapnilchavan13/vehicle.git`
2. Navigate to the project directory: `cd vehicle-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Install json-server globally by running the following command in your terminal: `npm install -g json-server`
6. Open a new terminal window and navigate to your project directory.
7. Start the json-server with the following command: `json-server --watch db.json --port 8080`
8. Open your browser and visit: `http://localhost:3000`


