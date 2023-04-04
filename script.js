

const userName = prompt('come ti chiami?');

const userLasyName = prompt(`qual'è il tuo cognome?`);

const userColor = prompt(`qual'è il tuo colore preferito?`);

const sumPass = userName + userLasyName + userColor +`23`;

document.getElementById('password').innerHTML = sumPass;
document.getElementById("User_name").innerHTML = userName;

console.log(sumPass);