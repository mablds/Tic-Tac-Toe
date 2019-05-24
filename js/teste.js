const ha = [
    {
        nome: "Saulo",
        sexo: "Homem",
        idade: 5
    },
    {
        nome: "Marcelo",
        sexo: "Homem",
        idade: 9
    },
    {
        nome: "Luis",
        sexo: "Homem",
        idade: 2
    },
    {
        nome: "Helen",
        sexo: "Muie",
        idade: 7
    },
    {
        nome: "Aline",
        sexo: "Muie",
        idade: 2
    },
    {
        nome: "Maria",
        sexo: "Muie",
        idade: 3
    },
    {
        nome: "Mariana",
        sexo: "Muie",
        idade: 9
    }
]

const bla = ha.filter((el) => {
    if(el.sexo === "Homem" && el.idade >= 5)
        return el
})

console.log(bla)