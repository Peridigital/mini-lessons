// Currying
// https://www.sitepoint.com/currying-in-functional-javascript/
// A way of contructing functions that allows for partial application of a funciton's arguments.
function add(a, b) {
  return a + b;
}
add(1,2)

function addNums(a) {
  return function(b) {
    return a + b;
  }
}
addNums(1)(2);

// Module pattern

let person = {
  name: 'Joe',
  sayName() {
    return this.name;
  }
}
person.sayName();

let person1 = (function() {
  const name = 'Joe';
  return {
    sayName() {
      return name;
    }
  }
})()
person1.sayName();

// Singleton
// http://robdodson.me/javascript-design-patterns-singleton/
// Limits the number of instances of a particular object to just one. The single instance is called the singleton.

let singleton = (function() {

  let instance;

  function init() {

    function privateMethod() {
      console.log('I am a private method!');
    }

    let privateVariable = 'I am a private variable';
    let randomNumber = Math.random();

    return {
      publicMethod() {
        console.log('I am a public method');
      },
      publicProperty: 'I am a public property',
      randomNum: function() {
        return randomNumber;
      }
    }
  }

  return {
    getInstance: function() {
      if(!instance) instance = init();
      return instance;
    }
  }

})()


// Factory
// http://www.dofactory.com/javascript/factory-method-design-pattern
// Function that returns/creates an object
let Factory = function() {

  let employees = [];

  let FullTime = function(employeeName, hireDate) {
    this.name = employeeName;
    this.hourlyPay = '15/hr';
    this.hireDate = hireDate
  }
  let PartTime = function(employeeName, hireDate) {
    this.name = employeeName;
    this.hourlyPay = '12/hr',
    this.hireDate = hireDate;
  }
  let Temp = function(employeeName, hireDate) {
    this.name = employeeName;
    this.hourlyPay = '11/hr',
    this.hireDate = hireDate;
  }

  this.createEmployee = function(type, name, hireDate) {
    let employee;
    switch (type) {
      case "FT":
        employee = new FullTime(name, hireDate);
        break;
      case "PT":
        employee = new PartTime(name, hireDate);
        break;
      case "Temp":
        employee = new Temp(name, hireDate);
        break;
      default:
        return;
    }
    employees.push(employee);
    console.log("Employee created.");
  }
  this.getEmployees = function() {
    return employees;
  }

}
