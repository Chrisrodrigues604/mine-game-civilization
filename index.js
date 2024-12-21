import { game, recursos, TRABALHADORES } from "./src/states.js"
import { construcoes, profissoes } from "./src/entidades/listaEntidades.js"
import { calcularProducaoPorSegundo } from "./src/utils/calcularProducaoPorSegundo.js"
import { comprar } from "./src/loja/comprarEntidade.js"
import { vender } from "./src/loja/venderRecursos.js"

import * as UI from "./src/ui/index.js"

// Configurações
const velocidadeDia = 1000 // 1 segundo

// Funções dos botões
UI.btnComprarMinerador.addEventListener("click", () => comprar("minerador", "pessoa", () => {
  atualizarBtns()
  infoMetricas.innerText = calcularProducaoPorSegundo()

}))
UI.btnComprarLenhador.addEventListener("click", () => comprar("lenhador", "pessoa", () => {
  atualizarBtns()
  infoMetricas.innerText = calcularProducaoPorSegundo()

}))
UI.btnComprarCasa.addEventListener("click", () => comprar("casa", "construcao", () => {
  atualizarBtns()
  infoMetricas.innerText = calcularProducaoPorSegundo()

}))
UI.btnComprarFazenda.addEventListener("click", () => comprar("fazenda", "construcao", () => {
  atualizarBtns()
  infoMetricas.innerText = calcularProducaoPorSegundo()

}))
UI.btnComprarFazendeiro.addEventListener("click", () => comprar("fazendeiro", "pessoa", () => {
  atualizarBtns()
  infoMetricas.innerText = calcularProducaoPorSegundo()
}))
UI.btnVenderMadeira.addEventListener('click', () => vender('madeira'))

function atualizarBtns() {
  UI.btnComprarMinerador.innerText = `Comprar Minerador - ${profissoes["minerador"].custo.ouro} ouro`
  UI.btnComprarLenhador.innerText = `Comprar Lenhador - ${profissoes["lenhador"].custo.ouro} ouro`
  UI.btnComprarFazendeiro.innerText = `Comprar Fazendeiro - ${profissoes["fazendeiro"].custo.ouro} ouro`
  UI.btnComprarCasa.innerText = `Comprar Casa - ${construcoes["casa"].custo.ouro} ouro, ${construcoes["casa"].custo.madeira} madeira`
  UI.btnComprarFazenda.innerText = `Comprar Fazenda - ${construcoes["fazenda"].custo.ouro} ouro, ${construcoes["casa"].custo.madeira} madeira`
}

function proximoDia() {
  game.data.passarDia(() => {
    TRABALHADORES.forEach((pessoa) => {
      pessoa.setIdade()
      pessoa.setXp()
    })
  })
  
  TRABALHADORES.forEach((pessoa) => {
    pessoa.comer()
  })
}


function render() {
  if (game.populacao >= 1) {
    UI.infoData.innerText = `Data: ${game.data.dia}/${game.data.mes}/${game.data.ano}`
    UI.infoOuro.innerText = `Ouro: ${recursos.ouro} / qtd: ${game.trabalhadores.minerador}`
    UI.infoMadeira.innerText = `Madeira: ${recursos.madeira} / qtd: ${game.trabalhadores.lenhador}`
    UI.infoPopulacao.innerText = `População: ${game.populacao}/${game.populacaoMax}`
    UI.infoFazendas.innerText = `Fazendas: ${game.construcoes.fazenda} / qtd: ${game.trabalhadores.fazendeiro}`
    UI.infoAlimento.innerText = `Alimento: ${recursos.alimento}`
  }
  requestAnimationFrame(render)
}

//start
window.addEventListener('load', () => {

  setInterval(proximoDia, velocidadeDia)
  requestAnimationFrame(render)
  atualizarBtns()
})


