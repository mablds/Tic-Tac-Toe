let player = ["x", "o"]
let playAlternate = player
let pl1 = [] // pl1 = O
let pl2 = [] // pl2 = X
const finalArray = []

document.getElementById("start").addEventListener("click", startMultiple)
document.getElementById("startSingle").addEventListener("click", startSingle)
document.getElementById("start").addEventListener("click", startMultiple)
document.getElementById("reset").addEventListener("click", reset)

function reset() {
    location.reload()
}

function startMultiple() {
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

    function gameTicTac() {
        let jogadasMultiple = 0;
        if (playAlternate[0] === "x") { //playerAlternate[0] = ["x", "o"]
            if (this.className.includes(" x") || this.className.includes(" o")) {
                console.log("opção inválida! escolha um campo vazio. próximo a jogar: " + playAlternate[0])
            } else {
                this.className += " " + playAlternate[0]
                pl2.push(this.id)
                jogadasMultiple = jogadasMultiple + 1;
                console.log("num jogadas "+jogadasMultiple)
                let verify = verifWin(possiblewins, pl2, jogadasMultiple)
                if (verify == false) {
                    playAlternate.reverse()
                }
            }
        }
        if (playAlternate[0] === "o") { //playerAlternate[0] = ["o", "x"]
            if (this.className.includes(" x") || this.className.includes(" o")) {
                console.log("opção inválida! escolha um campo vazio. próximo a jogar: " + playAlternate[0])
            } else {
                this.className += " " + playAlternate[0]
                finalArray.push(playAlternate[0])
                pl1.push(this.id)
                jogadasMultiple = jogadasMultiple + 1;
                console.log("num jogadas "+jogadasMultiple)
                let verify = (verifWin(possiblewins, pl1, jogadasMultiple))
                if (verify == false) {
                    playAlternate.reverse()
                }
            }
        }
    }
}


function startSingle() {
    let randomSquares = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"]
    let jogadasSingle = 0;
    win = false
    if (win == false) {
        document.getElementById("um").addEventListener("click", playAlone)
        document.getElementById("dois").addEventListener("click", playAlone)
        document.getElementById("tres").addEventListener("click", playAlone)
        document.getElementById("quatro").addEventListener("click", playAlone)
        document.getElementById("cinco").addEventListener("click", playAlone)
        document.getElementById("seis").addEventListener("click", playAlone)
        document.getElementById("sete").addEventListener("click", playAlone)
        document.getElementById("oito").addEventListener("click", playAlone)
        document.getElementById("nove").addEventListener("click", playAlone)
    }

    function playAlone() {
        if (this.className.includes(" x") || this.className.includes(" o")) {
            console.log("opção inválida! escolha um campo vazio. próximo a jogar: " + playAlternate[0])
        } else {
            this.className += " " + playAlternate[0]
            pl1.push(this.id)
            jogadasSingle = jogadasSingle + 1;
            let verify = verifWin(possiblewins, pl1, jogadasSingle)
            if (verify == false) {
                playAlternate.reverse()
                playComputer()
            }

        }
    }

    //PLAY DO COMPUTADOR:
    function playComputer() {
        let computerplay = false
        let ind
        while (computerplay == false) {
            ind = Math.floor(Math.random() * 10)
            if (ind < 8)
                computerplay = true
        }
        if (document.getElementById("" + randomSquares[ind]).className.includes(" x") || document.getElementById("" + randomSquares[ind]).className.includes(" o")) {
            console.log('não')
            playComputer()
        } else {
            document.getElementById("" + randomSquares[ind]).className += " " + playAlternate[0]
            const ide = document.getElementById("" + randomSquares[ind]).id
            pl2.push(ide)
        }
        let verify = verifWin(possiblewins, pl2, jogadasSingle)
        if (verify == false) {
            playAlternate.reverse()
            playAlone()
        }
    }
}

function verifWin(winArr, playerArr, jogada) {
    let verifando = false

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
        setTimeout(function () { alert("PARABÉNS! Temos um vencedor!") }, 500)
        console.log('o proximo é: ' + finalArray[0])
        console.log(playerArr)
        if (playerArr.includes("winX")) {
            playerX += 1
            document.getElementById("playerO").innerHTML += "<br>x wins: " + playerX
        }
        if (playerArr.includes("winO")) {
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
            pl1 = []
            pl2 = []
            jogada = 0
        }, 1000)

    }
    if (jogada > 8 && verif == false) {
        setTimeout(function () { alert('DEU VELHA!') }, 800)
        jogada = 0
        pl1 = []
        pl2 = []
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
        }, 1000)
        reset()
    }
    return verifando
}