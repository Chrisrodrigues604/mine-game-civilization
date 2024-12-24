import { profissoes } from '../entidades/listaEntidades.js';
import { TRABALHADORES, game, recursos } from '../states.js';

class SaveGame {
  save() {
    localStorage.setItem('game', JSON.stringify(game));
    localStorage.setItem('recursos', JSON.stringify(recursos));
    if(TRABALHADORES.length !== 0){

      localStorage.setItem('trabalhadores', JSON.stringify(TRABALHADORES));
    }
    console.log('Jogo salvo com sucesso!');
  }

  load() {
    const gameSalvo = JSON.parse(localStorage.getItem('game'));
    const recursosSalvos = JSON.parse(localStorage.getItem('recursos'));
    const trabalhadoresSalvos = JSON.parse(localStorage.getItem('trabalhadores'));

    if (gameSalvo) {
      game.loadState(gameSalvo)
    }

    if (recursosSalvos) {
      Object.assign(recursos, recursosSalvos);
    }

    if (trabalhadoresSalvos) {

      trabalhadoresSalvos.forEach(element => {  
        const profissaoEscolhida = profissoes[element.entidadeName] || null
        console.log(element.entidadeName)
        const novoTrabalhador = profissaoEscolhida.create()
        TRABALHADORES.push(novoTrabalhador)
      })

      TRABALHADORES.forEach(e => {
        e.trabalhar()
      })
    }

    console.log('Jogo carregado com sucesso!');
  }
}

export { SaveGame };
