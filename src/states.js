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
  ouro: 500,
  madeira: 100,
  alimento: 1000
}

const TRABALHADORES = [];




const game = {
  data: new Data(),
  trabalhadores: {
    lenhador: 0,
    fazendeiro: 0,
    minerador: 0
  },
  construcoes: {
    fazenda: 0,

  },
  populacao: 0,
  populacaoMax: 5,
}


export { recursos, game, TRABALHADORES }