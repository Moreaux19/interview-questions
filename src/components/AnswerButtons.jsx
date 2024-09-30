import React, { useState } from 'react';
import data from '../utils/data';

const totalQuestions = data.length;

export default function AnswerButtons({ getRandomElement }) {
  // Счётчик кликов на кнопки верного ответа и неверного ответа
  const [clickCount, setClickCount] = useState({
    rightButton: 0,
    wrongButton: 0
  });
  // Счётчик для общего количества кликов
  const [totalClicks, setTotalClicks] = useState(0);

  // Обработчик кликов
  const handleClick = button => {
    // Увеличиваем счётчик кликов по кнопке
    setClickCount(prevCount => ({
      ...prevCount,
      [button]: prevCount[button] + 1
    }));

    // Увеличиваем общий счётчик кликов
    setTotalClicks(prev => {
      const newTotal = prev + 1;

      //Если вопросы закончились, блокируем кнопки и показываем alert
      if (newTotal === totalQuestions) {
        setTimeout(() => {
          alert('Больше вопросов нет');
        }, 100);
      }
      return newTotal;
    });

    // Получаем новый вопрос
    getRandomElement();
  };

  // Блокируем кнопки, если вопросы закончились
  const isDisabled = totalClicks >= totalQuestions;

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
          Right: [{clickCount.rightButton} of {totalQuestions}]
        </span>
        <span style={{ color: 'red' }}>
          Wrong: [{clickCount.wrongButton} of {totalQuestions}]
        </span>
      </div>
    </div>
  );
}
