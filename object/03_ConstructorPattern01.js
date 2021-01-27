/**
 * 此方式可以检测对象类型
 * @param {*} name 
 * @param {*} age 
 * @param {*} job 
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.sayName = function() {
        console.log(this.name);
    }
}

var person1 = new Person('akai', 20, 'Web Engineer');
var person2 = new Person('meng', 18, 'boss');

person1.sayName();
person2.sayName();

console.log('person1 instanceof Object is: ', person1 instanceof Object);
console.log('person1 instanceof Person is: ', person1 instanceof Person);
console.log('person2 instanceof Object is: ', person2 instanceof Object);
console.log('person2 instanceof Person is: ', person2 instanceof Person);