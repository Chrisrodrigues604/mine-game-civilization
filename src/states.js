import { construcoes } from "./entidades/listaEntidades.js";

class Data {
  constructor({ dia = 1, mes = 1, ano = 2000 } = {}) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
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
        viradaAno();
      }
    }
  }
}

let recursos = {
  ouro: 500,
  madeira: 100,
  alimento: 2000
}

let TRABALHADORES = [];

class StateGame {
  constructor(gameSalvo) {
    this.data = new Data();
    this.trabalhadores = {
      lenhador: 0,
      fazendeiro: 0,
      minerador: 0,
      pescador: 0,
    };
    this.construcoes = {
      fazenda: 0,
      casa: 1,
    };
    this.populacao = 0;
    this.populacaoMax = 5;

    // Se houver dados salvos, restaura o estado
    if (gameSalvo) {
      this.loadState(gameSalvo);
    }
  }

  update() {
    this.populacaoMax = Number(this.construcoes.casa) * Number(construcoes['casa'].locacao);
  }

  // Método para restaurar o estado
  loadState(state) {
    this.data = new Data(state.data); // Recrie objetos complexos como Data
    Object.assign(this.trabalhadores, state.trabalhadores);
    Object.assign(this.construcoes, state.construcoes);
    this.populacao = state.populacao;
    this.populacaoMax = state.populacaoMax;
  }
}

let game = new StateGame()

export { recursos, game, TRABALHADORES, StateGame }