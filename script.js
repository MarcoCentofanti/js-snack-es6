
/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


const bici = [
  { nome: "a", peso: 5},
  { nome: "b", peso: 41},
  { nome: "c", peso: 45},
  { nome: "d", peso: 24},
  { nome: "e", peso: 30},
  { nome: "f", peso: 19},
]

let pesoMaggiore = 100
let indexBiciPesante
for (let index = 0; index < bici.length; index++) {
if (bici[index].peso < pesoMaggiore) {
  pesoMaggiore = bici[index].peso
  indexBiciPesante = index
 }
}
console.log(bici[indexBiciPesante])

// ESERCIZIO POST CORREZIONE

const bicycles = [
  { nome: "a", peso: 5},
  { nome: "b", peso: 41},
  { nome: "c", peso: 45},
  { nome: "d", peso: 24},
  { nome: "e", peso: 30},
  { nome: "f", peso: 19},
]

function getLighterBike(bicycles) {
  if (bicycles.length <= 0) {
    return {};
  }
  let lightestBike =  bicycles[0];

  for (let i = 1; i < bicycles.length; i++){
    if (lightestBike.peso > bicycles[i].peso) {
      lightestBike = bicycles[i];
    }
  } 
  return lightestBike
}

const lightestBike = getLighterBike(bicycles)
console.log(getLighterBike(bicycles))

document.getElementById("lighterBike").textContent = `${lightestBike.nome}: Peso:${lightestBike.peso}`



/*
Snack 2
Creare un array di oggetti di squadre.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti fatti” e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

function numeroRandom(max) {
  return Math.floor(Math.random() * max)
}

const squadre = [
  { name: "Inter", 
    points: 0,
    foulsSuffered: 0,},
  { name: "Roma", 
    points: 0,
    foulsSuffered: 0,},
  { name: "Milan", 
    points: 0,
    foulsSuffered: 0,},
  { name: "Lazio", 
    points: 0,
    foulsSuffered: 0,},
]

console.log(squadre)


for (let index2 = 0; index2 < squadre.length; index2++ ) {
  for (let key in squadre[index2]) {
    if(key === "points") {
      squadre[index2].points = numeroRandom(100)
    } else {
      if(key === "foulsSuffered") {
        squadre[index2].foulsSuffered = numeroRandom(10)
      }}}}
      
      
      const Extraction =[]

    for (let i = 0; i < squadre.length; i++){
      Extraction.push(squadre[i].name);
      Extraction.push(squadre[i].foulsSuffered);
    }

    console.log(Extraction)


    // ESERCIZIO POST CORREZIONE


    const randomNumber = (min, max) => {
      max - Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const teams = [
      {
        nome: "PSG",
        puntiFatti: 0,
        falliSubiti: 0,
      },
      {
        nome: "Ajax",
        puntiFatti: 0,
        falliSubiti: 0,
      },
      {
        nome: "Manchester City",
        puntiFatti: 0,
        falliSubiti: 0,
      },
      {
        nome: "Real Madrid",
        puntiFatti: 0,
        falliSubiti: 0,
      },
    ]

for (let i = 0; i < teams.length; i++) {
  currentTeam = teams[i];

  currentTeam.puntiFatti = randomNumber(0, 100);
  currentTeam.falliSubiti = randomNumber(10, 200);
}

console.log(teams)

const teamsWithoutPoints = []

for (let i = 0; i < teams.length; i++) {
  const currentTeam = {
    nome: teams[i].nome,
    falliSubiti: teams[i].falliSubiti,
  }
}

teamsWithoutPoints.push(currentTeam)
console.log(teams)