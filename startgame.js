let params = new URLSearchParams(document.location.search);
exports.firstName = params.get("firstname");
exports.lastName = params.get("lastname");
exports.ageGroup = params.get("agegroup");
exports.ability = params.get("ability");
exports.number = Math.floor(Math.random() * 456);
console.log(number);
