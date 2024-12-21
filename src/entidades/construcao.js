import { recursos } from "../states.js"

class Contrucao {
  constructor({custo}){
    this.custo = {
      ouro: custo.ouro,
      madeira: custo.madeira
    }
    this.create()
  }

  create(){
    recursos.ouro -= this.custo.ouro
    recursos.madeira -= this.custo.madeira
  }
}

export { Contrucao }