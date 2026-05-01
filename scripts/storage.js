function save() {
  localStorage.setItem("neura_state", JSON.stringify(state));
}

function loadState() {
  return JSON.parse(localStorage.getItem("neura_state"));
}
