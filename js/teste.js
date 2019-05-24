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

const bla = ha.map((el) => {
    const { nome, sexo, idade } = el
    return {
        nome: nome.toLowerCase(),
        sexo: sexo.toLowerCase(),
        idade: idade
    }
})

console.log(bla)