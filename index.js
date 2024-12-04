class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let arma
        switch(this.tipo){
            case "Guerreiro":
                arma = "Espada"
                break
            case "Ninja":
                arma = "Shuriken"
                break
            case "Mago":
                arma = "Magia"
                break
            case "Monge":
                arma = "Artes Marciais"
                break
            default:
                arma = "Arma Não Identificada"
        }
        console.log(`o tipo ${this.tipo} atacou usando ${arma}`)
    }
}
let personagemExemploGuerreiro = new personagem("Kyupes", "22", "Guerreiro")
let personagemExemploNinja = new personagem("Bluhite", "34", "Ninja")
let personagemExemploMago = new personagem("Jokeymin", "143", "Mago")
let personagemExemploMonge = new personagem("Plygius", "84", "Monge")

personagemExemploGuerreiro.atacar()
personagemExemploNinja.atacar()
personagemExemploMago.atacar()
personagemExemploMonge.atacar()