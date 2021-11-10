const elimination = document.getElementById("elimination");
const gameLost = document.getElementById("game-lost");

const ageGroup = localStorage.getItem("ageGroup");
const ability = localStorage.getItem("ability");
const number = localStorage.getItem("number");

const gameObj = {
  "<25": {
    Dexterity: "tug of war",
    Cunning: "glass stepping stones",
    Speed: "honeycomb",
    Strength: "red light green light",
    Memory: "recruiter round",
  },
  "25-29": {
    Dexterity: "marbles",
    Cunning: "honeycomb",
    Speed: "stepping stones",
    Strength: "recruiter round",
    Memory: "red light green light",
  },
  "30-34": {
    Dexterity: "WINNER",
    Cunning: "recruiter round",
    Speed: "tug of war",
    Strength: "stepping stones",
    Memory: "marbles",
  },
  "35-39": {
    Dexterity: "stepping stones",
    Cunning: "red light green light",
    Speed: "marbles",
    Strength: "honeycomb",
    Memory: "tug of war",
  },
  "40-44": {
    Dexterity: "red light green light",
    Cunning: "recruiter round",
    Speed: "tug of war",
    Strength: "marbles",
    Memory: "honeycomb",
  },
  "45+": {
    Dexterity: "marbles",
    Cunning: "tug of war",
    Speed: "glass stepping stones",
    Strength: "recruiter round",
    Memory: "honeycomb",
  },
};

const outcome = gameObj[ageGroup][ability];

if (outcome === "WINNER") {
  elimination.innerText = `Congratulations player ${number}, you have completed the games.`;
  gameLost.innerText = `Your total winnings are 45.6 billion won.`;
} else {
  elimination.innerText = `Player ${number} eliminated.`;
  gameLost.innerText = `You failed to complete ${outcome}.`;
}
