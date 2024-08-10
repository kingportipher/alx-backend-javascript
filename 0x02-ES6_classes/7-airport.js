export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override the default string conversion
  toString() {
    return `[object ${this._code}]`;
  }
}
