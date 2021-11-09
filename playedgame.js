let params = new URLSearchParams(document.location.search);
let firstName = params.get("firstname");
let lastName = params.get("lastname");
let ageGroup = params.get("agegroup");
let ability = params.get("ability");

console.log(firstName);
console.log(lastName);
console.log(ageGroup);
console.log(ability);

const welcome = document.getElementById("welcome");
const playerNumber = document.getElementById("playerNumber");
const text = document.getElementById("game");
const number = Math.floor(Math.random() * 456);
const elimination = document.getElementById("elimination");

welcome.innerText += ` ${firstName} ${lastName}.`;
playerNumber.innerText += ` ${number}.`;

const gameObj = {
  "<25": {
    Dexterity: "tug of war",
    Cunning: "glass stepping stones",
    Speed: "honeycomb",
    Strength: "red light green light",
    Memory: "recruiter round",
  },
  "26-29": {
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
  elimination.innerText = `Congratulations player ${number}, you have completed the games.\n
  Your total winnings are 45.6 billion won.`;
} else {
  elimination.innerText = `Player ${number} eliminated. \n
  You failed to complete ${outcome}.`;
}
