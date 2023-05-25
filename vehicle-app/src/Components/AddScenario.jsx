import React from 'react'
import "../Styles/Addscenario.css"

export const AddScenario = () => {
  return (
    <div className='addmaindiv'>
        <h4>Scenario/add</h4>

        <h2>Add Scenario</h2>
        <div className='middlediv'>
        <div>
            <h4>Scenario Name</h4>
            <input type="text" placeholder='Test Scenario'/>
        </div>
        <div>
            <h4>Scenario Time (seconds)</h4>
            <input type="Number" className="required-field" placeholder='10' required/>
            <p className='popup'>Scenario is required</p>
        </div>
        </div>
        
        <div className='threebuttons'>
            <button>Add</button>
            <button>Reset</button>
            <button>Go Back</button>
        </div>
    </div>
  )
}
