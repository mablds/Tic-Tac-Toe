document.getElementById("um").addEventListener("click", gameTicTac)
document.getElementById("dois").addEventListener("click", gameTicTac)
document.getElementById("tres").addEventListener("click", gameTicTac)
document.getElementById("quatro").addEventListener("click", gameTicTac)
document.getElementById("cinco").addEventListener("click", gameTicTac)
document.getElementById("seis").addEventListener("click", gameTicTac)
document.getElementById("sete").addEventListener("click", gameTicTac)
document.getElementById("oito").addEventListener("click", gameTicTac)
document.getElementById("nove").addEventListener("click", gameTicTac)

const player = ["x", "o"]
const pl1 = [] // pl1 = O
const pl2 = [] // pl2 = X
const finalArray = []
let jogadas = 0;

function verifWin(winArr, playerArr, jogada) {
    let verif = false
    winArr.map(e => {
        if (!playerArr.includes(e)) {
            // console.log('iguais')
            if (playerArr.includes(e[0]) && playerArr.includes(e[1]) && playerArr.includes(e[2])) {
                verif = true
            }
        }
    })

    if (verif == true) {
        alert('Temos um Vencedor!')
        console.log('nhe')
        location.reload()
    }
    if (jogada > 8 && verif == false) {
        console.log('DEU VELHA!')
        alert('DEU VELHA!')
        location.reload()
    }
}

function gameTicTac() {
    const playAlternate = player
    if (playAlternate[0] === "x") { //playerAlternate[0] = ["x", "o"]
        if (this.className.includes(" x") || this.className.includes(" o")) {
            // playAlternate.reverse()
            console.log("opção inválida! escolha um campo vazio. próximo a jogar: "+playAlternate[1])
        } else {
            this.className += " " + playAlternate[0]
            pl2.push(this.id)
            jogadas = jogadas + 1;
            playAlternate.reverse()
            console.log("proximo a jogar: "+playAlternate[0])
            verifWin(possiblewins, pl2, jogadas)
        }
    }
    if (playAlternate[0] === "o") //playerAlternate[0] = ["o", "x"]
        if (this.className.includes(" x") || this.className.includes(" o")) {
            // playAlternate.reverse()
            console.log("opção inválida! escolha um campo vazio. próximo a jogar: "+playAlternate[1])
        } else {
            this.className += " " + playAlternate[0]
            pl1.push(this.id)
            jogadas = jogadas + 1;
            playAlternate.reverse()
            console.log("proximo a jogar: "+playAlternate[0])
            verifWin(possiblewins, pl1, jogadas)
        }
}

