import formatData from "./helper.js";

const loader = document.getElementById("loader");
const container = document.getElementById("container");

const URL =
  "https://opentdb.com/api.php/?amount=10&difficulty=easy&type=multiple";

let formattedData = null;
let questionIndex = 0

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = formatData(json.results);
  start();
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};

window.addEventListener("load", fetchData);
