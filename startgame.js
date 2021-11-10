let params = new URLSearchParams(document.location.search);
let firstName = params.get("firstname");
let lastName = params.get("lastname");
let ageGroup = params.get("agegroup");
let ability = params.get("ability");

localStorage.setItem("ageGroup", ageGroup);
localStorage.setItem("ability", ability);

const welcome = document.getElementById("welcome");
const playerNumber = document.getElementById("playerNumber");
const number = Math.floor(Math.random() * 456);
// const elimination = document.getElementById("elimination");

localStorage.setItem("number", number);

welcome.innerText += ` ${firstName} ${lastName}.`;
playerNumber.innerText += ` ${number}.`;
