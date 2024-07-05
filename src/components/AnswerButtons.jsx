import React, { useState } from 'react';
import data from '../utils/data';

export default function AnswerButtons() {
  const [rightButtonHandler, setRightButtonHandler] = useState(0);
  const [wrongButtonHandler, setWrongButtonHandler] = useState(0);
  function rightClickCounter() {
    setRightButtonHandler(rightButtonHandler + 1);
  }
  function wrongClickCounter() {
    setWrongButtonHandler(wrongButtonHandler + 1);
  }
  let dataLength = data.length + 1;
  return (
    <div className="popup__buttons-container">
      <button onClick={rightClickCounter} className="popup__answer-button">
        Right
      </button>
      <button
        onClick={wrongClickCounter}
        className="popup__answer-button"
        style={{ backgroundColor: 'red' }}
      >
        Wrong
      </button>
      <div className="popup__span-container">
        <span style={{ color: 'green' }}>
          Right: [{rightButtonHandler} of {dataLength}]
        </span>
        <span style={{ color: 'red' }}>
          Wrong: [{wrongButtonHandler} of {dataLength}]
        </span>
      </div>
    </div>
  );
}
