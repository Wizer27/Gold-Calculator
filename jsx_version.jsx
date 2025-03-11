import React, { useState } from "react";

const GoldCalculator = () => {
  // Состояния для хранения данных
  const [col, setCol] = useState(0); // Количество микросхем
  const [weights, setWeights] = useState(""); // Веса микросхем
  const [result, setResult] = useState(0); // Результат расчета

  // Функция для расчета золота
  const calculateGold = () => {
    // Преобразуем введенные веса в массив чисел
    const weightsArray = weights.split(",").map((w) => parseFloat(w.trim()) || 0);

    // Проверка соответствия количества весов и микросхем
    if (weightsArray.length !== col) {
      alert("Количество введенных весов должно совпадать с количеством микросхем.");
      return;
    }

    // Расчет общего количества золота
    const totalGold = weightsArray.reduce((sum, weight) => sum + weight * 0.03 / 100, 0);
    setResult(totalGold.toFixed(4)); // Обновляем состояние результата
  };

  return (
    <div className="container">
      <h2>Калькулятор золота</h2>

      {/* Поле для ввода количества микросхем */}
      <label htmlFor="col">Количество микросхем:</label>
      <input
        type="number"
        id="col"
        min="0"
        placeholder="Введите количество микросхем"
        value={col}
        onChange={(e) => setCol(parseInt(e.target.value) || 0)}
      />

      {/* Поле для ввода весов микросхем */}
      <label htmlFor="weights">Введите веса микросхем (через запятую):</label>
      <input
        type="text"
        id="weights"
        placeholder="Например: 10, 20, 15"
        value={weights}
        onChange={(e) => setWeights(e.target.value)}
      />

      {/* Кнопка для расчета */}
      <button onClick={calculateGold}>Рассчитать вес золота</button>

      {/* Отображение результата */}
      <h3>Результат: <span id="result">{result}</span> граммов золота</h3>
    </div>
  );
};

export default GoldCalculator;
