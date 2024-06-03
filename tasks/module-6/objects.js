/**
 * 1. Define a JavaScript object named car with the following properties:
 * - make (string), e.g. Toyota
 * - model (string)
 * - year (number)
 * - color (string)
 * 2. Add a method to the car object named changeColor(newColor) which updates the color property of the car.
 * 3. The changeColor method should return the new color of the car.
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */
const car = {
  make: 'MG',
  model: 'Comet',
  year: 2024,
  color: 'White',
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
};
const newColor = car.changeColor('Black');

/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
  firstName: 'Anusha',
  lastName: 'S',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = Object.create(person);
student.grade = 'Distinction';
student.getGrade = function () {
  return this.grade;
};

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student);
module.exports = {
  car,
  person,
  student,
  student2,
};
