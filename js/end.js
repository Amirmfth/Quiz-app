const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const scoreElm = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");

scoreElm.innerText = score;

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid username or score");
  } else {
    const finalScore = { name: input.value, score };
    highScores.push(finalScore)
    highScores.sort((a ,b) => b.score - a.score)
    highScores.splice(10)
    localStorage.setItem("highScores" , highScores)
    localStorage.removeItem("score")
    window.location.assign("/")
  }
};

button.addEventListener("click", saveHandler);
