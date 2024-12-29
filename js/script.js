document.getElementById("processButton").addEventListener("click", () => {
    const fileInput = document.getElementById("fileInput");
    const loader = document.getElementById("loader");
    const resultContainer = document.getElementById("resultContainer");
    const sequenceTitle = document.getElementById("sequenceTitle");
    const sequenceString = document.getElementById("sequenceString");
  
    // Очистка попередніх результатів
    resultContainer.innerHTML = "";
    sequenceTitle.classList.add("hidden");
    sequenceString.classList.add("hidden");
    sequenceString.textContent = "";
  
    if (!fileInput.files.length) {
      alert("Будь ласка, виберіть файл.");
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
    const chunkSize = 1024 * 1024; // Розмір блоку 1 МБ
    let offset = 0;
    const numbers = [];
  
    const readNextChunk = () => {
      const blob = file.slice(offset, offset + chunkSize);
      reader.readAsText(blob);
    };
  
    reader.onload = (event) => {
      const lines = event.target.result
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => /^\d{6}$/.test(line)); // Тільки 6-значні числа
      numbers.push(...lines);
  
      offset += chunkSize;
      if (offset < file.size) {
        readNextChunk();
      } else {
        loader.classList.remove("hidden"); // Показуємо лоадер
        setTimeout(() => {
          loader.classList.add("hidden");
          processNumbers(numbers); // Обробка чисел
        }, 0); // Імітація затримки для демонстрації лоадера
      }
    };
  
    readNextChunk();
  });
  
  function processNumbers(numbers) {
    const resultContainer = document.getElementById("resultContainer");
    const sequenceTitle = document.getElementById("sequenceTitle");
    const sequenceString = document.getElementById("sequenceString");
  
    const { puzzlePieces, combinedString } = findSequence(numbers);
  
    // Рендеримо пазли
    puzzlePieces.forEach((piece) => {
      const div = document.createElement("div");
      div.className = "puzzle-piece";
      div.textContent = piece;
      div.style.backgroundColor = getRandomColor(); // Різнокольорові пазли
      resultContainer.appendChild(div);
    });
  
    // Рендеримо з'єднаний рядок
    sequenceTitle.classList.remove("hidden");
    sequenceString.classList.remove("hidden");
    sequenceString.textContent = combinedString;
  }
  
  function findSequence(numbers) {
    const graph = buildGraph(numbers);
    let longestSequence = [];
  
    numbers.forEach((num) => {
      const path = findLongestPath(graph, num);
      if (path.length > longestSequence.length) {
        longestSequence = path;
      }
    });
  
    const puzzlePieces = longestSequence.map((num) => String(num).padStart(6, "0"));
    let combinedString = String(puzzlePieces[0]).slice(0, 4);
    for (let i = 1; i < puzzlePieces.length; i++) {
      combinedString += String(puzzlePieces[i]).slice(2);
    }
  
    return { puzzlePieces, combinedString };
  }
  
  function buildGraph(numbers) {
    const graph = {};
    numbers.forEach((num) => {
      const lastTwo = num.slice(-2);
      graph[num] = numbers.filter((other) => other.startsWith(lastTwo));
    });
    return graph;
  }
  
  function findLongestPath(graph, start, visited = new Set()) {
    if (visited.has(start)) return [];
    visited.add(start);
  
    let longestPath = [];
    for (const neighbor of graph[start] || []) {
      const path = findLongestPath(graph, neighbor, new Set(visited));
      if (path.length > longestPath.length) {
        longestPath = path;
      }
    }
  
    return [start, ...longestPath];
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  