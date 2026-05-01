let state = loadState() || {
  xp: 0,
  level: 1,
  streak: 0,
  lastActive: null,
  completed: {}
};

function addXP(amount) {
  state.xp += amount;

  if (state.xp >= state.level * 100) {
    state.level++;
    holoSpeak(`LEVEL UP → ${state.level}`);
  }

  save();
  updateStats();
}

function updateStats() {
  document.getElementById("stats").innerText =
    `XP: ${state.xp} | LVL: ${state.level} | STREAK: ${state.streak}`;
}

function updateStreak() {
  const today = new Date().toDateString();

  if (state.lastActive !== today) {
    state.streak += 1;
    state.lastActive = today;
    holoSpeak(`Streak increased → ${state.streak}`);
  }

  save();
}
