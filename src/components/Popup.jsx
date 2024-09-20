import React from 'react';
import QuestionUpdate from './QuestionUpdate.jsx';

// Функция открытия попапа
export default function Popup({ active, setActive }) {
  return (
    <div
      className={active ? 'popup popup_active' : 'popup'}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className="popup__window" onClick={evt => evt.stopPropagation()}>
        <QuestionUpdate />
        <button className="popup__close-button" onClick={() => setActive(false)}></button>
      </div>
    </div>
  );
}
