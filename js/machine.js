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

function verifWin(winArr, playerArr) {
    let verif = true
    console.log('iniciandoverificação')
    winArr.map(e => {
        if (!playerArr.includes(e)) {
            console.log('iguais')
            verif = false
            if (playerArr.includes(e[0]) && playerArr.includes(e[1]) && playerArr.includes(e[2])) {
                alert("Temos um vencedor!")
            }
        }
    })
    if (verif == true) {
        console.log('diferentes')
    }
}

function gameTicTac() {
    const playAlternate = player.reverse()
    this.className += " " + playAlternate[0]
    console.log(this.className)
    if (playAlternate[0] === "x") {
        pl2.push(this.id)
        verifWin(possiblewins, pl2)
    } else {
        pl1.push(this.id)
        verifWin(possiblewins, pl1)
    }
}
