import React from 'react';
import data from '../utils/data.js';
import shuffleArray from '../utils/shuffleFunc.js';
import AnswerButtons from './AnswerButtons.jsx';

shuffleArray(data);

// Функция открытия попапа
export default function Popup({ active, setActive }) {
  return (
    <div className={active ? 'popup popup_active' : 'popup'} onClick={() => setActive(false)}>
      <div className="popup__content" onClick={evt => evt.stopPropagation()}>
        <p className="popup__question">{data[0].question}</p>
        <details>
          <summary>Ответ:</summary>
          <p>{data[0].answer}</p>
        </details>
        <AnswerButtons />
        <button className="popup__close-button" onClick={() => setActive(false)}></button>
      </div>
    </div>
  );
}
