export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) { // eslint-disable-line
    if (hint === 'number') {
      return this._size;
    }

    if (hint === 'string') {
      return this._location;
    }
  }
}
