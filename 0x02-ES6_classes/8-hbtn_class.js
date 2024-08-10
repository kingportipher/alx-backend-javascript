export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override the type conversion to Number
  valueOf() {
    return this._size;
  }

  // Override the type conversion to String
  toString() {
    return this._location;
  }
}
