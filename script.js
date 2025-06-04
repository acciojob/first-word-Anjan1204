function firstWord(str) {
  str = str.trim(); // Remove leading and trailing spaces
  const spaceIndex = str.indexOf(' ');

  if (spaceIndex === -1) {
    return str; // No space found, return the whole string
  }

  return str.substring(0, spaceIndex); // Return up to first space
}

function showFirstWord() {
  const input = document.getElementById("inputText").value;
  const result = firstWord(input);
  document.getElementById("result").textContent = `First Word: "${result}"`;
}
