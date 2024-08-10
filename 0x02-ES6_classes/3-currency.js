export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code with type checking
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type checking
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
