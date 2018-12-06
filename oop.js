// let person = {
//     age: 18,
//     name: "Vasya"
// };
// person.newProp="qwerqwewq";

function Person(age, name) {
    this.age=age;
    this.name=name;
var lastname= "Petrovich";
    function getFullname() {
        return name + " " + lastname;
    }

    this.hi = function() {
        alert("Hi, " + getFullname());
    }
}
var person = new Person(18, "vasya");
person.hi();

function Student(group) {
    Person.apply(this, [18, "Petya"]);
    this.group=group;
}
Student.prototype=person;
var stud = new Student("KIUKIu-17");

// console.log(typeof(person));
 console.log(stud.name);
 console.log(stud.group);
//console.log(person.age);
//console.log(person["name"]);