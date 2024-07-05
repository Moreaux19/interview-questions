// Функция перемешивания массива
export default function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Функция для показа случайного элемента
function showRandomElement(data) {
  let currentIndex = 0;
  if (currentIndex < data.length) {
    const element = data[currentIndex];
    // document.getElementById('result').innerText = element;
    // currentIndex++;
  } else {
    document.getElementById('result').innerText = 'Все элементы показаны';
  }
}
