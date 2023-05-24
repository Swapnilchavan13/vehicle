import React from 'react'
import "../Styles/Addscenario.css"

export const AddScenario = () => {
  return (
    <div className='addmaindiv'>
        <h4>Scenario/add</h4>

        <h2>Add Scenario</h2>
        <div className='middlediv'>
        <div>
            <h5>Scenario Name</h5>
            <input type="text" placeholder='Test Scenario'/>
        </div>
        <div>
            <h5>Scenario Time (seconds)</h5>
            <input type="text" placeholder='10'/>
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
