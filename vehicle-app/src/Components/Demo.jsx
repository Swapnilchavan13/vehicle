import React, {useState} from 'react'

export const Demo = () => {
    const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <input
        type="text"
        className="required-field"
        placeholder="Enter your name"
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
        style={{
          border: '1px solid black',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: showPopup ? 'antiquewhite' : 'white'
        }}
      />
      {showPopup && (
        <div
          className="popup"
          style={{
            backgroundColor: 'brown',
            color: 'white',
            fontSize: '14px',
            padding: '6px',
            borderRadius: '10px',
            marginTop: '5px'
          }}
        >
          This field is required.
        </div>
      )}
    </div>
  );
}
