/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/newline-after-import
import { readGameSaving } from './readGameSaving';
import { GameSavingData } from './GameSavingData';

export class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  static async load() {
    const data = await readGameSaving()
      .then(dat => new GameSavingData(dat).json());
    return data;
  }
}
