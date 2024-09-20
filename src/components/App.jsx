import React, { useState } from 'react';
import Popup from './Popup';

// Основная функция с кнопкой для показа попапа
export default function App() {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <div className="page">
      <button className="start-button" onClick={() => setPopupActive(true)}>
        Start
      </button>
      <Popup active={popupActive} setActive={setPopupActive} />
    </div>
  );
}
