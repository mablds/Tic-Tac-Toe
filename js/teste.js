const availablePlays = ["tres", "quatro", "seis", "sete", "oito", "nove"]
let pl1 = ["dois", "cinco", "tres"]
let pl2 = ["um", "oito"]
var possiblewins = [
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

    ["tres", "seis", "nove"],
    ["tres", "nove", "seis"],
    ["seis", "tres", "nove"],
    ["seis", "nove", "tres"],
    ["nove", "seis", "tres"],
    ["nove", "tres", "seis"],
]

playMaster()

function playMaster() {
    if (availablePlays[0]) {
       strategyPlay(pl1, pl2)
                    
    } else {
        console.log('sem jogadas a fazer. Deu velha.')
    }
}
function strategyPlay(plays1, plays2){
    if (plays1.length === 1){
        let computerplay = false
        let ind
        while (computerplay == false) {
            ind = Math.floor(Math.random() * 10)
            if (ind > 0 && ind <= plays1.length)
                computerplay = true
        }
        possiblewins.find(el => { 
            plays1
            if(el[1] === plays1[0]){
                console.log(el[2])
                return el[2]
            }
        })
    }
    if (plays1.length === 2){
        possiblewins.find(el => {
            plays1
            if(el[0] === plays1[0] && el[1] === plays1[1] && !plays2.includes(el[2])){
                console.log(el[2])
                return el[2]
            }
        })
    }
    if (plays1.length === 3){
        possiblewins.find(el => {
            plays1
            if(el[0] === plays1[0] && el[1] === plays1[1] && !plays2.includes(el[2])){
                
            }
        })
    }
}


