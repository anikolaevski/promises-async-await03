import { GameSavingLoader } from '../src/js/GameSavingLoader';
import { GameSavingData } from '../src/js/GameSavingData';
import { readGameSaving } from '../src/js/readGameSaving';

test('Test GameSavingLoader', () => {
  const expected = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');

  GameSavingLoader.load().then((data) => {
    const result = JSON.parse(data);
    expect(result).toEqual(expected);
  });
});

test('Test GameSavingData', () => {
  const expected = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  const sourceData = new GameSavingData(expected);

  sourceData.json().then((data) => {
    const result = JSON.parse(data);
    expect(result).toEqual(expected);
  });
});

test('Test readGameSaving (default)', () => {
  const testdata = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const expected = JSON.parse(testdata);

  readGameSaving(testdata).then((data) => {
    const result = new GameSavingData(data).json();
    expect(result).toEqual(expected);
  });
});

test('Test readGameSaving({"a":1,"b":2})', () => {
  const testdata = '{"a":1,"b":2}';
  const expected = JSON.parse(testdata);

  readGameSaving(testdata).then(async (data) => {
    const result = await new GameSavingData(data).json();
    expect(result).toEqual(expected);
  });
});

test('Test readGameSaving(0)', () => {
  const testdata = 0;
  const expected = 'Error: Empty data!';

  readGameSaving(testdata)
    .catch((error) => {
      expect(error).toBe(expected);
    });
});

jest.mock('../src/js/readGameSaving');
beforeEach(() => {
  jest.resetAllMocks();
});

// test('Test readGameSaving(mock)', () => {
//   const testdata = '{"a":1,"b":2}';
//   const mock = jest.fn();

//   readGameSaving.mockReturnValue(testdata)
//     .then((data) => {
//       expect(mockReturnValue).toBeCalledWith(testdata);
//     });
// });

// test("returns undefined by default", () => {
//   const mock = jest.fn();

//   let result = mock("foo");

//   expect(result).toBeUndefined();
//   expect(mock).toHaveBeenCalled();
//   expect(mock).toHaveBeenCalledTimes(1);
//   expect(mock).toHaveBeenCalledWith("foo");
// });

// test("returns undefined by default2", () => {
//   jest.mock('../src/js/readGameSaving');
//   readGameSaving.mockImplementation(par => {

//   })
//   // const mock = readGameSaving;

//   let result = mock("0");

//   // expect(result).toBeUndefined();
//   // expect(mock).toHaveBeenCalled();
//   // expect(mock).toHaveBeenCalledTimes(1);
//   expect(mock).toHaveBeenCalledWith("0");
// });
