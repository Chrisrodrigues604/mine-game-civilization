import { construcoes } from "./entidades/listaEntidades.js";

class Data {
  constructor() {
    this.dia = 1;
    this.mes = 1;
    this.ano = 2000;
  }

  passarDia(viradaAno) {
    const diasNoMes = 30;
    const mesesNoAno = 12;

    this.dia++;
    if (this.dia > diasNoMes) {
      this.dia = 1;
      this.mes++;
      if (this.mes > mesesNoAno) {
        this.mes = 1;
        this.ano++;
        viradaAno()
      }
    }
  }
}


const recursos = {
  ouro: 5000000,
  madeira: 1000000,
  alimento: 10000000
}

const TRABALHADORES = [];


class StateGame {
  constructor(){
    this.data = new Data(),
    this.trabalhadores = {
      lenhador: 0,
      fazendeiro: 0,
      minerador: 0,
      pescador: 0
    },
    this.construcoes ={
      fazenda: 0,
      casa: 1
    },
    this.populacao = 0,
    this.populacaoMax = 5
  }

  update(){
    this.populacaoMax = Number(this.construcoes.casa) * Number(construcoes['casa'].locacao)
  }
}

const game = new StateGame()

export { recursos, game, TRABALHADORES }