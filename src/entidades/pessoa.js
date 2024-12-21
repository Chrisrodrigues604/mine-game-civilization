import { recursos } from "../states.js"

class Pessoa {
  constructor({ alimento, custo, itemColeta }) {
    this.itemColeta = itemColeta
    this.custo = {
      ouro: custo.ouro,
      madeira: custo.madeira,
      fazenda: custo.fazenda,
      alimento: custo.fazenda,
      minAlimento: custo.minAlimento
    }
    this.tipo = 'pessoa'
    this.alimento = alimento
    this.idade = Math.floor(Math.random() * (30 - 18 + 1)) + 18;
    this.idadeMaxima = Math.floor(Math.random() * (75 - 50 + 1)) + 50;
    this.status = {
      morto: false,
    }
    this.xp = 0
    this.trabalhando = false
    this.resultado = Math.floor(Math.random() * (100 - 10 + 1)) + 10; //10 ~ 100
    this.velocidade = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000; //5s ~ 10s

    this.trabalhar()  
  }

  comer() {
    /*
      se não tiver o que comer almente a idade do pesonagem
      fazendo a vida dele acabar mais rapido
    */
    if (recursos.alimento >= this.alimento) {
      recursos.alimento -= this.alimento
    } else {
      this.setIdade()
    }
  }

  setIdade() {
    if (this.status.morto) {
      return;
    }

    if (this.idade < this.idadeMaxima) {
      this.idade++;
    } else {
      this.status.morto = true;
      console.log(`${this.nome} faleceu aos ${this.idadeMaxima} anos.`);
    }
  }

  setXp() {
    this.xp++
    this.resultado < 1000 ? this.resultado++ : this.resultado++
    this.velocidade >= 200 ? this.velocidade-- : null
  }

  trabalhar() {
    if (this.trabalhando == false) {
      this.trabalhando = setInterval(() => {
        recursos[this.itemColeta] += this.resultado
      }, this.velocidade);
    }
  }

  pararTrabalho() {
    if (this.trabalhando !== false) {
      clearInterval(this.trabalhando)
      this.trabalhando = false
    }
  }

}

export { Pessoa }