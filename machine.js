document.getElementById("um").addEventListener("click", gameTicTac)
document.getElementById("dois").addEventListener("click", gameTicTac)
document.getElementById("tres").addEventListener("click", gameTicTac)
document.getElementById("quatro").addEventListener("click", gameTicTac)
document.getElementById("cinco").addEventListener("click", gameTicTac)
document.getElementById("seis").addEventListener("click", gameTicTac)
document.getElementById("sete").addEventListener("click", gameTicTac)
document.getElementById("oito").addEventListener("click", gameTicTac)
document.getElementById("nove").addEventListener("click", gameTicTac)


let player = ["x", "o"]

function gameTicTac() {
    let playAlternate = player.reverse()
    this.className += " "+playAlternate[0]
    player = playAlternate

}
