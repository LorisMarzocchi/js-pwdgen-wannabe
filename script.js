

const userName = prompt('come ti chiami?');

const userLastName = prompt(`qual'è il tuo cognome?`);

const userColor = prompt(`qual'è il tuo colore preferito?`);

const year = 23;

const sumPass = userName + userLastName + userColor + year;

document.getElementById('password').innerHTML = sumPass;
document.getElementById("User_name").innerHTML = userName;


const passUser = `la tua password è: ${sumPass}`;
console.log(passUser);





// input e controllo numero

// const userName = prompt('come ti chiami?');

// const userLasyName = prompt(`qual'è il tuo cognome?`);

// const userColor = prompt(`qual'è il tuo colore preferito?`);

// const anno = parseInt(prompt(`qual'è il tuo anno di nascita?`));

// let year = anno;
// if (isNaN(anno)) {
//   year = '#';
  
// } else {
//   year = anno;

// }
// const sumPass = userName + userLasyName + userColor + year;


// document.getElementById('password').innerHTML = sumPass;
// document.getElementById("User_name").innerHTML = userName;


// const passUser = `la tua password è: ${sumPass}`;
// console.log(passUser);