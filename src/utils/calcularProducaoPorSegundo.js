import { TRABALHADORES } from "../states.js"

function calcularProducaoPorSegundo() {
  if(!TRABALHADORES) return
  // Inicializa as variáveis de produção
  let producaoOuro = 0
  let producaoMadeira = 0
  let producaoComida = 0

  // Itera sobre os trabalhadores para somar a produção
  TRABALHADORES.forEach((trabalhador) => {
    if (trabalhador.itemColeta === 'ouro') {
      producaoOuro += trabalhador.resultado / (trabalhador.velocidade / 1000)
    } else if (trabalhador.itemColeta === 'madeira') {
      producaoMadeira += trabalhador.resultado / (trabalhador.velocidade / 1000)
    } else if(trabalhador.itemColeta == 'comida') {
      producaoComida += trabalhador.resultado / (trabalhador.velocidade / 1000)
    }
  })

  // Formata a produção para uma casa decimal
  producaoOuro = producaoOuro.toFixed(1)
  producaoMadeira = producaoMadeira.toFixed(1)
  producaoComida = producaoComida.toFixed(1)

  // Retorna a string formatada
  return `Produção por segundo:
  Ouro: ${producaoOuro}/s, 
  Madeira: ${producaoMadeira}/s
  Comida: ${producaoComida}/s
  `
}

export { calcularProducaoPorSegundo }