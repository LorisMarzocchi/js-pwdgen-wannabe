

const userName = prompt('come ti chiami?');

const userLasyName = prompt(`qual'è il tuo cognome?`);

const userColor = prompt(`qual'è il tuo colore preferito?`);

let year = 23;
year = parseInt(year);

let sumPass = userName + userLasyName + userColor + year;

// let sumPass = userName + userLasyName + userColor + `23`;

document.getElementById('password').innerHTML = sumPass;
document.getElementById("User_name").innerHTML = userName;


let passUser = `la tua password è: ${sumPass}`;
console.log(passUser);