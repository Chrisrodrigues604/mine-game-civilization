import { game, recursos } from "../states.js"

class Contrucao {
  constructor({custo, nome, locacao}){
    this.locacao = locacao
    this.nome = nome
    this.custo = {
      ouro: custo.ouro,
      madeira: custo.madeira
    }
    this.create()
  }

  create(){
    recursos.ouro -= this.custo.ouro
    recursos.madeira -= this.custo.madeira

    game.construcoes[this.nome]++
  }
}

export { Contrucao }