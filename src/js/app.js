/* eslint-disable no-console */
// TODO: write code here
import { GameSavingLoader } from './GameSavingLoader';
import { readGameSaving } from './readGameSaving';
import { GameSavingData } from './GameSavingData';

GameSavingLoader.load().then((data) => {
  const obj = JSON.parse(data);
  console.log(obj);
});

readGameSaving(0)
  .then(async (dat) => {
    const obj = await new GameSavingData(dat).json();
    console.log('Ok: ', JSON.parse(obj));
  })
  .catch(dat => console.log('Error:', dat));
