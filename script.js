
/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

/*
const bici = [
  { nome: "a", peso: 5},
  { nome: "b", peso: 41},
  { nome: "c", peso: 45},
  { nome: "d", peso: 24},
  { nome: "e", peso: 30},
  { nome: "f", peso: 19},
]

let pesoMaggiore = 0
let indexBiciPesante
for (let index = 0; index < bici.length; index++) {
if (bici[index].peso > pesoMaggiore) {
  pesoMaggiore = bici[index].peso
  indexBiciPesante = index
 }
}
console.log(bici[indexBiciPesante])
*/

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

const teams = [
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

console.log(teams)


for (let index2 = 0; index2 < teams.length; index2++ ) {
  for (let key in teams[index2]) {
    if(key === "points") {
      teams[index2].points = numeroRandom(100)
    } else {
      if(key === "foulsSuffered") {
        teams[index2].foulsSuffered = numeroRandom(10)
      }}}}
      
      
      const Extraction =[]

    for (let i = 0; i < teams.length; i++){
      Extraction.push(teams[i].name);
      Extraction.push(teams[i].foulsSuffered);
    }

    console.log(Extraction)
