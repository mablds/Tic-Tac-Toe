let player = ["x", "o"]
let playAlternate = player
let pl1 = [] // pl1 = O
let pl2 = [] // pl2 = X
const finalArray = []
let jogadasMultiple = 0
let jogadasSingle = 0
let randomSquares = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"]

document.getElementById("start").addEventListener("click", startMultiple)
document.getElementById("startSingle").addEventListener("click", startSingle)
document.getElementById("start").addEventListener("click", startMultiple)
document.getElementById("reset").addEventListener("click", reset)

function reset() {
    location.reload()
}

function startMultiple() {
    pl1 = []
    pl2 = []

    document.getElementById("um").className = 'square'
    document.getElementById("dois").className = 'square'
    document.getElementById("tres").className = 'square'
    document.getElementById("quatro").className = 'square'
    document.getElementById("cinco").className = 'square'
    document.getElementById("seis").className = 'square'
    document.getElementById("sete").className = 'square'
    document.getElementById("oito").className = 'square'
    document.getElementById("nove").className = 'square'

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
        if (playAlternate[0] === "x") { //playerAlternate[0] = ["x", "o"]
            if (this.className.includes(" x") || this.className.includes(" o")) {
                console.log("opção inválida! escolha um campo vazio. próximo a jogar: " + playAlternate[0])
            } else {
                this.className += " " + playAlternate[0]
                pl2.push(this.id)
                jogadasMultiple = jogadasMultiple + 1;
                console.log("num jogadas " + jogadasMultiple)
                let verify = verifWin(possiblewins, pl2, jogadasMultiple, 2)
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
                console.log("num jogadas " + jogadasMultiple)
                let verify = (verifWin(possiblewins, pl1, jogadasMultiple, 2))
                if (verify == false) {
                    playAlternate.reverse()
                }
            }
        }
    }
}

function startSingle() {

    document.getElementById("um").className = 'square'
    document.getElementById("dois").className = 'square'
    document.getElementById("tres").className = 'square'
    document.getElementById("quatro").className = 'square'
    document.getElementById("cinco").className = 'square'
    document.getElementById("seis").className = 'square'
    document.getElementById("sete").className = 'square'
    document.getElementById("oito").className = 'square'
    document.getElementById("nove").className = 'square'

    randomSquares = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"]
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

            randomSquares = arrayRemove(randomSquares, this.id)
            console.log(randomSquares)

            let verify = verifWin(possiblewins, pl1, jogadasSingle, 1)
            if (verify == false) {
                playAlternate.reverse()
                playComputer()
            }

        }
    }

    function arrayRemove(arr, value) {
        return arr.filter((el) => {
            return el != value;
        })
    }

    //PLAY DO COMPUTADOR:
    function playComputer() {
        if (randomSquares[0]) {
            console.log()
            let computerplay = false
            let ind
            while (computerplay == false) {
                ind = Math.floor(Math.random() * 10)
                if (ind < randomSquares.length)
                    computerplay = true
            }
            document.getElementById("" + randomSquares[ind]).className += " " + playAlternate[0]
            const ide = document.getElementById("" + randomSquares[ind]).id
            pl2.push(ide)
            jogadasSingle = jogadasSingle + 1;

            randomSquares = arrayRemove(randomSquares, randomSquares[ind])
            console.log(randomSquares)

            let verify = verifWin(possiblewins, pl2, jogadasSingle, 1)

            if (verify == false) {
                playAlternate.reverse()
                playAlone()
            }
        } else {
            console.log('sem jogadas a fazer. Deu velha.')
        }
    }
}

function verifWin(winArr, playerArr, jogada, mode) {
    console.log("quantidade de jogadas ao verificar: " + jogada)
    let verifando = false

    let verif = false
    winArr.map(e => {
        if (!playerArr.includes(e)) {
            if (playerArr.includes(e[0]) && playerArr.includes(e[1]) && playerArr.includes(e[2])) {
                verif = true
                randomSquares = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"]
            }
        }
    })

    if (verif == true) {
        verifando = true
        setTimeout(function () { alert("PARABÉNS! Temos um vencedor!") }, 800)
        console.log(playerArr)

        setTimeout(() => {
            if (mode === 1) {
                jogadasSingle = jogadasSingle - jogadasSingle
                pl1 = []
                pl2 = []
                startSingle()
            }
            if (mode === 2) {
                jogadasMultiple = jogadasMultiple - jogadasMultiple
                startMultiple()
            }

        }, 1000)
    }
    if (jogada > 8 && verif == false) {
        setTimeout(() => { alert('DEU VELHA!') }, 800)
        if (mode === 1) {
            jogadasSingle = jogadasSingle - jogadasSingle
            setTimeout(() => { startSingle() }, 1900)
        }
        if (mode === 2) {
            jogadasMultiple = jogadasMultiple - jogadasMultiple
            setTimeout(() => { startMultiple() }, 1900)
        }
    }
    return verifando
}