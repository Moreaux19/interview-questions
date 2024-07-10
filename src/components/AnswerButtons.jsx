import React, { useState } from 'react';
import data from '../utils/data';

export default function AnswerButtons() {
  const [counts, setCounts] = useState({ rightButton: 0, wrongButton: 0 });
  const handleClick = button => {
    setCounts(prevState => ({
      ...prevState,
      [button]: prevState[button] + 1
    }));
  };
  let dataLength = data.length;
  return (
    <div className="popup__buttons-container">
      <button onClick={() => handleClick('rightButton')} className="popup__answer-button">
        Right
      </button>
      <button
        onClick={() => handleClick('wrongButton')}
        className="popup__answer-button"
        style={{ backgroundColor: 'red' }}
      >
        Wrong
      </button>
      <div className="popup__span-container">
        <span style={{ color: 'green' }}>
          Right: [{counts.rightButton} of {dataLength}]
        </span>
        <span style={{ color: 'red' }}>
          Wrong: [{counts.wrongButton} of {dataLength}]
        </span>
      </div>
    </div>
  );
}
