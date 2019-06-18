/* eslint-disable import/prefer-default-export */
export class GameSavingData {
  constructor(data) {
    this.data = data;
  }

  async json() {
    // eslint-disable-next-line no-return-await
    return await String.fromCharCode.apply(null, new Uint16Array(this.data));
  }
}
