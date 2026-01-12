

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


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




