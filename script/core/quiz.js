function loadQuiz(book, chapterIndex) {
  const quiz = book.chapters[chapterIndex].quiz;

  document.getElementById("reader").innerHTML = quiz.map(q => `
    <div class="quiz">
      <h3>${q.q}</h3>
      ${q.options.map(o => `
        <button onclick="checkAnswer('${o}', '${q.answer}')">
          ${o}
        </button>
      `).join("")}
    </div>
  `).join("");
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    addXP(30);
    holoSpeak("Correct. Memory strengthened.");
  } else {
    addXP(10);
    holoSpeak("Incorrect. Learning reinforced.");
  }

  updateStreak();
}
