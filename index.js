let nome = "Caio"
let qtdXp = 0
let nivel = ""


for(i = 0; i < 15; i++){
    let x = Math.floor(Math.random() * 12) + 1

    switch (x) {
        case 1:
        case 5:
        case 10:
            console.log(nome + " derrotou um monstro e ganhou 500 de exp.");
            qtdXp += 500
            break
        
        case 2:
        case 8:
            console.log(nome + " derrotou um boss e ganhou 4000 de exp.");
            qtdXp += 5000
            break
        
        case 3:
            console.log(nome + " foi derrotado por um boss e perdeu 3000 de exp.");
            qtdXp -= 3000
            break
        
        case 4:
            console.log(nome + " foi derrotado por um monstro e perdeu 1000 de exp.");
            qtdXp -= 1000
            break
        
        default:
            console.log(nome + " levou dano por um monstro e perdeu 50 de exp.");
            qtdXp -= 50
            break
    }
    console.log("A quantidade total de experiencia esta em: " + qtdXp)
}

if (qtdXp < 1000) {
    nivel = "Ferro"
} else if (qtdXp >= 1000 && qtdXp < 2000) {
    nivel = "Bronze"
} else if (qtdXp >= 2000 && qtdXp < 5000) {
    nivel = "Prata"
} else if (qtdXp >= 5000 && qtdXp < 7000) {
    nivel = "Ouro"
} else if (qtdXp >= 7000 && qtdXp < 8000) {
    nivel = "Platina"
} else if (qtdXp >= 8000 && qtdXp < 9000) {
    nivel = "Ascendente"
} else if (qtdXp >= 9000 && qtdXp < 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}


console.log("O Herói de nome " + nome + " está no nível de " + nivel)