export default class Car {
  // Constructor to initialize the attributes
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car object
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
