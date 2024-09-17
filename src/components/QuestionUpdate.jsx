import React, { useState } from 'react';
import AnswerButtons from './AnswerButtons.jsx';
import data from '../utils/data';

// Функция обновления карточки при нажатии кнопки
export default function QuestionUpdate() {
  // Хук состояния для отслеживания уже показанных карточек
  const [shownElement, setShownElement] = useState([]);

  // Хук состояния для отслеживания текущей карточки
  const [currentElement, setCurrentElement] = useState(null);

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
  };

  return (
    <div>
      {/* <h2>{randomElement.question}</h2>
      <p className="popup__question">{randomElement.question}</p>
      <details>
        <summary>Ответ:</summary>
        <p>{randomElement.answer}</p>
      </details> */}
      {currentElement && (
        <div>
          {Object.entries(currentElement).map(([key, value]) => (
            <p key={key}>
              {key}, {value}
            </p>
          ))}
        </div>
      )}
      {/* <button onClick={getRandomElement}>Показать объект 1</button>
      <button onClick={getRandomElement}>Показать объект 2</button> */}
      <AnswerButtons getRandomElement={getRandomElement} />
    </div>
  );
}
