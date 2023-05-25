import React from 'react';
import "../Styles/Addvehicle.css"

export const AddVehicle = () => {
  return (
    
    <div className="custom-component">
      <div className="row">

      <div className="input-container">
          <h4>Scenarios List</h4>
          <select>
          <option value="option">Select Scenario</option>
            <option value="option1">Option 1</option>
            <hr />
            <option value="option2">Option 2</option>
            <hr />
            <option value="option3">Option 3</option>
            <hr />
          </select>
        </div>
        <div className="input-container">
          <h4>Vehicle Name</h4>
          <input type="text" />
        </div>
        <div className="input-container">
          <h4>Speed</h4>
          <input type="number" />
        </div>
        
      </div>
      <div className="row">
        <div className="input-container">
          <h4>Position X</h4>
          <input type="text" />
        </div>
        <div className="input-container">
          <h4>Position Y</h4>
          <input type="text" />
        </div>
        <div className="input-container">
          <h4>Direction</h4>
          <select>
          <option value="option">Select Direction</option>
            <option value="option1">Toward</option>
            <hr />
            <option value="option2">Backward</option>
            <hr />
            <option value="option3">Upward</option>
            <hr />
            <option value="option3">Downward</option>
            <hr />
          </select>
        </div>
      </div>
    </div>
  )
}
