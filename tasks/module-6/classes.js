/**
 * JS Classes:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * - https://javascript.info/class
 * - https://javascript.info/class-inheritance
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
//create instance of class person

/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 */
class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }
  getGrade() {
    return this.grade;
  }
}

const person = new Person();
person.firstName = 'person';
person.lastName = 'test';

const student = new Student();
student.firstName = 'student';
student.lastName = 'test';
student.grade = 'A';

module.exports = {
  person,
  student,
};
