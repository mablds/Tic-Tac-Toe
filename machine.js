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
const possiblewins = [
    ["um", "dois", "tres"],
    ["um", "quatro", "sete"],
    ["um", "cinco", "nove"],
    ["dois", "cinco", "oito"],
    ["quatro", "cinco", "seis"],
    ["sete", "oito", "nove"],
    ["sete", "cinco", "tres"],
]

function verifWin(winArr, playerArr) {
    //se o "player"(playerArr) tem a condição de vitoria (todos os elementos dentro do winArr) ... 
    // winArr = ["um", "dois", "tres"]
    // playerArr = ["um", "dois", "hehehe", "huhuhu", "milão", "trjes"]
    let verif = false
    winArr.map(e => {
        if (playerArr.includes(e)) {
            console.log('iguais')
            verif = true
        }
    })
    // console.log('iguais')
    if(verif == true){
        alert("Temos um vencedor!")
    }
}

function gameTicTac() {
    const playAlternate = player.reverse()
    this.className += " " + playAlternate[0]
    if (playAlternate[0] === "x") {
        pl2.push(this.id)
        verifWin(possiblewins, pl2)
    } else {
        pl1.push(this.id)
        verifWin(possiblewins, pl1)
    }
}
