/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.querySelector(".card");
  let rank = document.querySelector(".rank");
  let suits = ["heart", "spade", "club", "diamond"];
  let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const getRandomInt = array => {
    return Math.floor(Math.random() * array.length);
  };

  card.classList.add(suits[getRandomInt(suits)]);
  rank.innerHTML = ranks[getRandomInt(ranks)];
};
