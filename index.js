class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque = "espada"
        console.log(`o tipo ${this.tipo} atacou usando ${ataque}`)
    }
}
let personagemExemploGuerreiro = new personagem("Kyupes", "22", "guerreiro")
let personagemExemploNinja = new personagem ("Bluhite", "34", "Ninja")
let personagemExemploMago = new personagem("Jokeymin", "143", "Mago")
let personagemExemploMonge = new personagem("Plygius", "84", "Monge")

personagemExemploNinja.atacar()