import React, { useState } from 'react';
import Popup from './Popup';
import data from '../utils/data.js';
import shuffleArray from '../utils/shuffleFunc.js';

shuffleArray(data);

export default function App() {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <div className="page">
      <main className="">
        <button className="start-button" onClick={() => setPopupActive(true)}>
          Start
        </button>
      </main>
      <Popup active={popupActive} setActive={setPopupActive}>
        <p className="popup__question">{data[0].question}</p>
        <details>
          <summary>Ответ:</summary>
          <p>{data[0].answer}</p>
        </details>
      </Popup>
    </div>
  );
}
