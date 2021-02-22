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

// new 操作符会把函数当做构造函数来调用
var person1 = new Person('akai', 20, 'Web Engineer');
var person2 = new Person('meng', 18, 'boss');

person1.sayName();
person2.sayName();

console.log('person1 instanceof Object is: ', person1 instanceof Object);
console.log('person1 instanceof Person is: ', person1 instanceof Person);
console.log('person2 instanceof Object is: ', person2 instanceof Object);
console.log('person2 instanceof Person is: ', person2 instanceof Person);


// 作为普通函数调用
Person('baby', -1, 'Scientist');
console.log(global.sayName()); // window in browser

// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, 'A', 66, 'boss');
o.sayName();