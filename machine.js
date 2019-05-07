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

// function verifWin() {
//     const possiblewins = [
//         ["um", "dois", "tres"],
//         ["um", "quatro", "sete"],
//         ["um", "cinco", "nove"],
//         ["dois", "cinco", "oito"],
//         ["quatro", "cinco", "seis"],
//         ["sete", "oito", "nove"],
//         ["sete", "cinco", "tres"],
//     ]

//     possiblewins.forEach(element => {
//         if (pl1.find(element) || pl2.find(element)) {
//             alert("Vencedor!")
//         } else {
//             alert("IH, DEU VELHA")
//         }
//     });
// }

function gameTicTac() {
    // verifWin()
    const playAlternate = player.reverse()
    this.className += " " + playAlternate[0]
    if (playAlternate[0] === "x") {
        pl2.push(this.id)
    } else {
        pl1.push(this.id)
    }

    console.log(pl1)
    console.log(pl2)
}
