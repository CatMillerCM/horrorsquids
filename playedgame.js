let params = new URLSearchParams(document.location.search);
let firstName = params.get("firstname");
let lastName = params.get("lastname");
let ageGroup = params.get("agegroup");
let ability = params.get("ability");

console.log(firstName);
console.log(lastName);
console.log(ageGroup);
console.log(ability);

// <25
// dexterity - tug of war
// cunning - stepping stones
// Speed - honeycomb
// strength - red light green light
// Memory - recruiter round

// 26-29
// dexterity - marbles
// cunning - honeycomb
// Speed - stepping stones
// strength - recruiter round
// Memory - red light green light
// 30-34
// dexterity - WINNER
// cunning - recruiter round
// Speed - tug of war
// strength - stepping stones
// Memory - marbles
// 35-39
// dexterity - stepping stones
// cunning - red light green light
// Speed - marbles
// strength - honeycomb
// Memory - tug of war
// 40-44
// dexterity - red light green light
// cunning - recruiter round
// Speed - tug of war
// strength - marbles
// Memory - honeycomb
// 45+
// dexterity - marbles
// cunning - tug of war
// Speed - stepping stones
// strength - recruiter round
// Memory - honeycomb
