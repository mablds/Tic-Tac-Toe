let player = ["x", "o"]
var pl1 = [] // pl1 = O
var pl2 = [] // pl2 = X
const finalArray = []
let jogadas = 0;
let playerO = 0
let playerX = 0
let win

document.getElementById("start").addEventListener("click", start)
document.getElementById("reset").addEventListener("click", reset)

function reset() {
    location.reload()
}

function start() {
    win = false
    if (win == false) {
        document.getElementById("um").addEventListener("click", gameTicTac)
        document.getElementById("dois").addEventListener("click", gameTicTac)
        document.getElementById("tres").addEventListener("click", gameTicTac)
        document.getElementById("quatro").addEventListener("click", gameTicTac)
        document.getElementById("cinco").addEventListener("click", gameTicTac)
        document.getElementById("seis").addEventListener("click", gameTicTac)
        document.getElementById("sete").addEventListener("click", gameTicTac)
        document.getElementById("oito").addEventListener("click", gameTicTac)
        document.getElementById("nove").addEventListener("click", gameTicTac)
    }
}

function gameTicTac() {
    const playAlternate = player
    if(playerO > 0 || playerX > 0){
        playAlternate.reverse()
    }
    console.log(playAlternate[0])
    if (playAlternate[0] === "x") { //playerAlternate[0] = ["x", "o"]
        if (this.className.includes(" x") || this.className.includes(" o")) {
            console.log("opção inválida! escolha um campo vazio. próximo a jogar: " + playAlternate[1])
        } else {
            if(playerO > 0 || playerX > 0){
                playAlternate.reverse()
            }
            this.className += " " + playAlternate[0]
            pl2.push(this.id)
            jogadas = jogadas + 1;
            let verify = verifWin(possiblewins, pl2, jogadas)
            // console.log("pl2: "+pl2)
            if (verify == false) {
                playAlternate.reverse()
            }
        }
    }
    if (playAlternate[0] === "o") //playerAlternate[0] = ["o", "x"]
        if (this.className.includes(" x") || this.className.includes(" o")) {
            console.log("opção inválida! escolha um campo vazio. próximo a jogar: " + playAlternate[1])
        } else {
            if(playerO > 0 || playerX > 0){
                playAlternate.reverse()
            }
            this.className += " " + playAlternate[0]
            finalArray.push(playAlternate[0])
            pl1.push(this.id)
            jogadas = jogadas + 1;
            // console.log("proximo a jogar: " + playAlternate[0])
            let verify = (verifWin(possiblewins, pl1, jogadas))
            // console.log("pl1: "+pl1)
            if (verify == false) {
                playAlternate.reverse()
            }
        }
}

function verifWin(winArr, playerArr, jogada) {
    let verifando = false
    const ultimoKey = finalArray.length
    const finalpositionArray = finalArray[ultimoKey - 1]

    let verif = false
    winArr.map(e => {
        if (!playerArr.includes(e)) {
            if (playerArr.includes(e[0]) && playerArr.includes(e[1]) && playerArr.includes(e[2])) {
                verif = true
            }
        }
    })

    if (verif == true) {
        verifando = true
        const vectorAux = []
        const vectorAux2 = []
        const zeraJogadas = 0
        setTimeout(function () { alert("PARABÉNS! Temos um vencedor!") }, 500)
        console.log('o proximo é: '+ finalArray[0])
        
        if (finalArray[0] === "x") {
            playerX += 1
            document.getElementById("playerO").innerHTML += "<br>x wins: " + playerX
        }
        if (finalArray[0] === "o") {
            playerO += 1
            document.getElementById("playerX").innerHTML += "<br>O wins: " + playerO
        }

        setTimeout(() => {
            document.getElementById("um").className = 'square'
            document.getElementById("dois").className = 'square'
            document.getElementById("tres").className = 'square'
            document.getElementById("quatro").className = 'square'
            document.getElementById("cinco").className = 'square'
            document.getElementById("seis").className = 'square'
            document.getElementById("sete").className = 'square'
            document.getElementById("oito").className = 'square'
            document.getElementById("nove").className = 'square'
            pl1 = vectorAux
            pl2 = vectorAux2
            jogadas = zeraJogadas
        }, 1000)

    }
    if (jogada > 8 && verif == false) {
        setTimeout(function () { alert('DEU VELHA!') }, 800)
    }
    return verifando
}
