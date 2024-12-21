import { recursos } from "../states.js"

function vender(item) {
  // Verifica se o recurso existe
  if (!recursos.hasOwnProperty(item)) {
    return alert('Recurso inválido!')
  }

  // Verifica se há quantidade suficiente para vender
  if (recursos[item] < 100) {
    return alert('Recurso insuficiente para vender!')
  }

  // Calcula a oferta e a demanda
  const oferta = Math.max(...Object.values(recursos))
  const demanda = Math.min(...Object.values(recursos))

  // Calcula o preço dinâmico com base na diferença entre oferta e demanda
  const diferenca = oferta - demanda
  const preco = 100 + diferenca * 0.1 // Ajuste o fator 0.1 conforme necessário

  // Aplica a venda
  recursos[item] -= 100
  recursos['ouro'] += preco

  console.log(`Você vendeu 100 unidades de ${item} por ${preco} de ouro.`)
  console.log(`Novo saldo de ${item}: ${recursos[item]}`)
  console.log(`Novo saldo de ouro: ${recursos['ouro']}`)
}


export { vender }