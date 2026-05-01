function startBook(bookId) {
  const book = BOOKS.find(b => b.id === bookId);

  renderMission(book, 0, 0);
}

function renderMission(book, chapterIndex, missionIndex) {
  const mission = book.chapters[chapterIndex].missions[missionIndex];

  document.getElementById("reader").innerHTML = `
    <h2>${book.title}</h2>
    <p>${mission.text}</p>

    <button onclick="nextMission(${book.id}, ${chapterIndex}, ${missionIndex})">
      Continue
    </button>
  `;

  holoSpeak("Mission active.");
  addXP(5);
}

function nextMission(bookId, chapterIndex, missionIndex) {
  const book = BOOKS.find(b => b.id === bookId);
  const chapter = book.chapters[chapterIndex];

  if (missionIndex + 1 < chapter.missions.length) {
    renderMission(book, chapterIndex, missionIndex + 1);
  } else {
    loadQuiz(book, chapterIndex);
  }
}
