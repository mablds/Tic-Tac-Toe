const possiblewins = [
    ["um", "dois", "tres"],
    ["um", "tres", "dois"],
    ["dois", "um", "tres"],
    ["dois", "tres", "um"],
    ["tres", "dois", "um"],
    ["tres", "um", "dois"],

    ["um", "quatro", "sete"],
    ["um", "sete", "quatro"],
    ["sete", "quatro", "um"],
    ["sete", "um", "quatro"],
    ["quatro", "sete", "um"],
    ["quatro", "um", "sete"],

    ["um", "cinco", "nove"],
    ["um", "nove", "cinco"],
    ["cinco", "um", "nove"],
    ["cinco", "nove", "um"],
    ["nove", "cinco", "um"],
    ["nove", "um", "cinco"],

    ["nove", "cinco", "um"],
    ["nove", "um", "cinco"],
    ["cinco", "nove", "um"],
    ["cinco", "um", "nove"],
    ["nove", "cinco", "um"],
    ["nove", "um", "cinco"],

    ["dois", "cinco", "oito"],
    ["dois", "oito", "cinco"],
    ["cinco", "dois", "oito"],
    ["cinco", "oito", "dois"],
    ["oito", "cinco", "dois"],
    ["oito", "dois", "cinco"],
    
    ["quatro", "cinco", "seis"],
    ["quatro", "seis", "cinco"],
    ["seis", "cinco", "quatro"],
    ["seis", "quatro", "cinco"],
    ["cinco", "quatro", "seis"],
    ["cinco", "seis", "quatro"],

    ["sete", "oito", "nove"],
    ["sete", "nove", "oito"],
    ["nove", "sete", "oito"],
    ["nove", "oito", "sete"],
    ["oito", "nove", "sete"],
    ["oito", "sete", "nove"],

    ["sete", "cinco", "tres"],
    ["sete", "tres", "cinco"],
    ["tres", "sete", "cinco"],
    ["tres", "cinco", "sete"],
    ["cinco", "tres", "sete"],
    ["cinco", "sete", "tres"],
]

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
    //se o "player"(playerArr) tem a condição de vitoria (todos os elementos dentro do winArr) ... 
    // winArr = ["um", "dois", "tres"]
    // playerArr = ["um", "dois", "hehehe", "huhuhu", "milão", "trjes"]
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
