import { profissoes } from "../entidades/listaEntidades.js"
import { game, recursos, TRABALHADORES } from "../states.js"
import { aumentarPreco } from "../utils/aumentarPreco.js"

function comprar(entidade, tipo, callback) {
  if (tipo === "pessoa") {
    const profissaoEscolhida = profissoes[item] || null
    if (!profissaoEscolhida) return console.error("Profissão inválida:", item)

    if (game.populacao >= game.populacaoMax) {
      return alert("Construa mais casas para aumentar a população!")
    }
    if (profissaoEscolhida.custo.ouro && recursos.ouro < profissaoEscolhida.custo.ouro) {
      return alert("Ouro insuficiente!")
    }
    if (profissaoEscolhida.custo.madeira && recursos.madeira < profissaoEscolhida.custo.madeira) {
      return alert("Madeira insuficiente!")
    }
    if (profissaoEscolhida.custo.fazenda && game.construcoes.fazenda <= game.trabalhadores.fazendeiro) {
      return alert("Fazenda insuficiente!")
    }
    if (profissaoEscolhida.custo.minAlimento && recursos.alimento < profissaoEscolhida.custo.minAlimento) {
      return alert("Tenha no minimo " + profissaoEscolhida.custo.minAlimento + " de comida!")
    }

    const novoTrabalhador = profissaoEscolhida.create()
    TRABALHADORES.push(novoTrabalhador)
    game.populacao++
    recursos.ouro -= profissaoEscolhida.custo.ouro

    aumentarPreco(profissaoEscolhida, 'ouro')

    game.trabalhadores[item]++

  } else if (tipo === "construcao") {
    const construcaoEscolhida = construcoes[entidade] || null
    if (!construcaoEscolhida) return console.error("Construção inválida:", entidade)

    if (construcaoEscolhida.custo.ouro && recursos.ouro < construcaoEscolhida.custo.ouro) {
      return alert("Ouro insuficiente!")
    }

    if (construcaoEscolhida.custo.madeira && recursos.madeira < construcaoEscolhida.custo.madeira) {
      return alert("Madeira insuficiente!")
    }

    if (construcaoEscolhida.custo.fazenda && game.construcoes.fazenda < construcaoEscolhida.custo.fazenda) {
      return alert("Madeira insuficiente!")
    }

    recursos.ouro -= construcaoEscolhida.custo.ouro
    recursos.madeira -= construcaoEscolhida.custo.madeira

    construcaoEscolhida.create()


    // Aumentar o preço da construção após a compra
    aumentarPreco(construcaoEscolhida, 'ouro')
    aumentarPreco(construcaoEscolhida, 'madeira')
  }

  callback()

}

export {comprar}