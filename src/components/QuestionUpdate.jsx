import React, { useState, useEffect, useRef } from 'react';
import AnswerButtons from './AnswerButtons.jsx';
import data from '../utils/data';

// Функция обновления карточки при нажатии кнопки
export default function QuestionUpdate() {
  // Хук состояния для отслеживания уже показанных карточек
  const [shownElement, setShownElement] = useState([]);

  // Хук состояния для отслеживания текущей карточки
  const [currentElement, setCurrentElement] = useState(null);

  // Хук для элемента details
  const detailsRef = useRef(null);

  const getRandomElement = () => {
    // Фильтруем карточки, которые уже были показаны
    const remainingElements = data.filter(element => !shownElement.includes(element));

    // Если все карточки были показаны, сбрасываем состояние
    if (remainingElements.length === 0) {
      setShownElement([]);
      setCurrentElement(null);
    }

    // Выбираем случайную карточку
    const randomElement = remainingElements[Math.floor(Math.random() * remainingElements.length)];

    // Обновляем состояния
    setShownElement([...shownElement, randomElement]);
    setCurrentElement(randomElement);

    // Закрываем details, при новом вопросе
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  // Отображаем случайную карточку при первом запуске
  useEffect(() => {
    const randomQuestion = data[Math.floor(Math.random() * data.length)];
    setCurrentElement(randomQuestion);
  }, []);

  return (
    <div className="popup__content">
      {currentElement && (
        <div>
          {Object.entries(currentElement).map(([key, value], index) => {
            return index === 0 ? (
              <p key={key}>{value}</p>
            ) : (
              <details key={key} ref={detailsRef}>
                <summary>Ответ:</summary>
                <p>{value}</p>
              </details>
            );
          })}
        </div>
      )}
      <AnswerButtons getRandomElement={getRandomElement} />
    </div>
  );
}
