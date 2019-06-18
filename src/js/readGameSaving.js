// eslint-disable-next-line import/prefer-default-export
export function readGameSaving(data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}') {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => ((input) => {
      const buffer = new ArrayBuffer(input.length * 2);
      const bufferView = new Uint16Array(buffer);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      if (bufferView.length > 0) {
        resolve(buffer);
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Empty data!');
      }
    })(data), 5000);
  });
}
