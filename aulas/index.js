const prompt = require('prompt-sync')();

const nome = prompt("Escolha o nome do seu Herói: ") // Defina o nome do herói
let xp = 10001 // Defina a Experiência do Herói

let nivel;

if (xp <= 1000) {
    nivel = "Ferro"
} else if (xp <= 2000) {
    nivel = "Bronze"
} else if (xp <= 5000) {
    nivel = "Prata"
} else if (xp <= 7000) {
    nivel = "Ouro"
} else if (xp <= 8000) {
    nivel = "Platina"
} else if (xp <= 9000) {
    nivel = "Ascendente"
} else if (xp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Divino"
}

console.log(`O herói ${nome} está no nível ${nivel}`)
