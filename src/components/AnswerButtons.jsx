import React, { useState } from 'react';
import data from '../utils/data';
// import { handleClick } from '../utils/handleClick';

export default function AnswerButtons() {
  const [counts, setCounts] = useState({ rightButton: 0, wrongButton: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = button => {
    // Обновляем счетчики
    setCounts(prevState => ({
      ...prevState,
      [button]: prevState[button] + 1
    }));

    // Проверяем, не последний ли это вопрос, если да — делаем кнопку неактивной
    currentIndex < data.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setTimeout(() => {
          setIsDisabled(true);
          alert('Больше вопросов нет.');
        }, 100);
  };

  return (
    <div className="popup__buttons-container">
      <button
        onClick={() => handleClick('rightButton')}
        className="popup__answer-button"
        disabled={isDisabled}
      >
        Right
      </button>
      <button
        onClick={() => handleClick('wrongButton')}
        className="popup__answer-button"
        style={{ backgroundColor: 'red' }}
        disabled={isDisabled}
      >
        Wrong
      </button>
      <div className="popup__span-container">
        <span style={{ color: 'green' }}>
          Right: [{counts.rightButton} of {data.length}]
        </span>
        <span style={{ color: 'red' }}>
          Wrong: [{counts.wrongButton} of {data.length}]
        </span>
      </div>
    </div>
  );
}
