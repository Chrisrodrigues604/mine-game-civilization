import { Pessoa } from "./pessoa.js"
import { Contrucao } from "./construcao.js"

const profissoes = {
  fazendeiro: {
    custo: {
      ouro: 150,
      madeira: 50,
      fazenda: 1,
      alimento: 1
    },
    create: function () {
      return new Pessoa({
        alimento: 1,
        itemColeta: 'alimento',
        custo: this.custo
      })
    }
  },
  minerador: {
    custo: {
      ouro: 200,
      alimento: 3,
      minAlimento: 200
    },
    create: function () {
      return new Pessoa({
        alimento: 1,
        itemColeta: 'ouro',
        custo: this.custo
      })
    },
  },
  lenhador: {
    custo: {
      ouro: 100,
      alimento: 2,
      minAlimento: 300
    },
    create: function () {
      return new Pessoa({
        alimento: 1,
        itemColeta: 'madeira',
        custo: this.custo
      })
    }
  }
}

const construcoes = {
  casa: {
    custo: {
      ouro: 500,
      madeira: 500
    },
    create: function () {
      return new Contrucao({
        custo: this.custo
      })
    }
  },
  fazenda: {
    custo: {
      ouro: 400,
      madeira: 600
    },
    create: function () {
      return new Contrucao({
        custo: this.custo
      })
    }
  }
}

export { profissoes, construcoes }