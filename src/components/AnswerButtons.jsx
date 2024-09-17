import React, { useState } from 'react';
import data from '../utils/data';
// import { handleClick } from '../utils/handleClick';

const totalQuestions = data.length;

export default function AnswerButtons({ getRandomElement }) {
  // const [counts, setCounts] = useState({ rightButton: 0, wrongButton: 0 });
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isDisabled, setIsDisabled] = useState(false);

  // const handleClick = button => {
  //   // Обновляем счетчики
  //   setCounts(prevState => ({
  //     ...prevState,
  //     [button]: prevState[button] + 1
  //   }));

  //   // Проверяем, не последний ли это вопрос, если да — делаем кнопку неактивной
  //   currentIndex < data.length - 1
  //     ? setCurrentIndex(currentIndex + 1)
  //     : setTimeout(() => {
  //         setIsDisabled(true);
  //         alert('Больше вопросов нет.');
  //       }, 100);
  // };

  // Счётчик для кнопки верных ответов
  const [rightButtonCount, setRightButtonCount] = useState(0);
  // Счётчик для кнопки неверных ответов
  const [wrongButtonCount, setWrongButtonCount] = useState(0);
  // Счётчик для общего количества кликов
  const [totalClicks, setTotalClicks] = useState(0);

  // Функция для увеличения общего счётчика кликов
  const incrementTotalClicks = () => {
    setTotalClicks(prev => {
      const newTotal = prev + 1;

      //Если вопросы закончились, блокируем кнопки и показываем alert
      if (newTotal >= totalQuestions) {
        setTimeout(() => {
          alert('Больше вопросов нет');
        }, 100);
      }
      return newTotal;
    });
  };

  // Обработчик кликов для rightButton
  const handleRightButtonClick = () => {
    // Увеличиваем счётчик верных ответов
    setRightButtonCount(prev => prev + 1);

    // Увеличиваем общий счётчик кликов
    incrementTotalClicks();

    // Получаем новый вопрос
    getRandomElement();
  };

  // Обработчик кликов для wrongButton
  const handleWrongButtonClick = () => {
    // Увеличиваем счётчик неверных ответов
    setWrongButtonCount(prev => prev + 1);

    // Увеличиваем общий счётчик кликов
    incrementTotalClicks();

    // Получаем новый вопрос
    getRandomElement();
  };

  // Блокируем кнопки, если вопросы закончились
  const isDisabled = totalClicks >= totalQuestions;

  return (
    <div className="popup__buttons-container">
      <button
        onClick={handleRightButtonClick}
        className="popup__answer-button"
        disabled={isDisabled}
      >
        Right
      </button>
      <button
        onClick={handleWrongButtonClick}
        className="popup__answer-button"
        style={{ backgroundColor: 'red' }}
        disabled={isDisabled}
      >
        Wrong
      </button>
      <div className="popup__span-container">
        <span style={{ color: 'green' }}>
          Right: [{rightButtonCount} of {totalQuestions}]
        </span>
        <span style={{ color: 'red' }}>
          Wrong: [{wrongButtonCount} of {totalQuestions}]
        </span>
      </div>
    </div>
  );
}
