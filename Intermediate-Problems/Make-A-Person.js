const Person = function (firstAndLast) {
  let fullName = firstAndLast;
  let firstName = fullName.split(" ")[0];
  let lastName = fullName.split(" ")[1];

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    firstName = name;
    fullName = name + " " + lastName;
  };
  this.setLastName = function (name) {
    lastName = name;
    fullName = firstName + " " + name;
  };
  this.setFullName = function (name) {
    fullName = name;
    firstName = name.split(" ")[0]
    lastName = name.split(" ")[1]
  };
};

const bob = new Person("Bob Ross");

console.log(bob.getFullName());
