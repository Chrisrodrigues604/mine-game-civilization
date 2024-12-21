import { TRABALHADORES, game, recursos } from '../states.js';

class SaveGame {
  save() {
    localStorage.setItem('game', JSON.stringify(game));
    localStorage.setItem('recursos', JSON.stringify(recursos));
    localStorage.setItem('trabalhadores', JSON.stringify(TRABALHADORES));
    console.log('Jogo salvo com sucesso!');
  }

  load() {
    const gameSalvo = JSON.parse(localStorage.getItem('game'));
    const recursosSalvos = JSON.parse(localStorage.getItem('recursos'));
    const trabalhadoresSalvos = JSON.parse(localStorage.getItem('trabalhadores'));

    if (gameSalvo) {
      Object.assign(game, gameSalvo);
    }

    if (recursosSalvos) {
      Object.assign(recursos, recursosSalvos);
    }

    if (trabalhadoresSalvos) {
      Object.assign(TRABALHADORES, trabalhadoresSalvos);
    }

    console.log('Jogo carregado com sucesso!');
  }
}

export { SaveGame };
