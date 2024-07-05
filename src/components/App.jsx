import React, { useState } from 'react';
import Popup from './Popup';

// Основная функция с кнопкой для показа попапа
export default function App() {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <div className="page">
      <main className="">
        <button className="start-button" onClick={() => setPopupActive(true)}>
          Start
        </button>
      </main>
      <Popup active={popupActive} setActive={setPopupActive} />
    </div>
  );
}
