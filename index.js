class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque = "espada"
        console.log(`o tipo ${tipo} atacou usando ${ataque}`)
    }
}
personagem.atacar()