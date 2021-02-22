'use strict';

// 
var person = new Object();
person.name = 'meng';
person.age = 18;
person.job = 'ceo';

person.sayName = function() {
    console.log(this.name);
}

// person.sayName();

// 字面量的方式声明
var person1 = {
    name: 'meng',
    age: 18,
    job: 'ceo',

    sayName: function() {
        console.log(this.name);
    }
}
// person1.sayName();

// delete
var delPerson = {};
Object.defineProperty(delPerson, 'name', {
    // configurable: false, // will return error
    configurable: true,
    value: 'name',
});
console.log('before delete', delPerson.name);
delete delPerson.name;
console.log('after delete', delPerson.name);

// 属性类型
var person2 = {};
Object.defineProperty(person2, 'name', {
    // writable: true,
    // value: 'meng',
    configurable: true,
    enumerable: false,
    get: function(val) {
        console.log('name is readed!', val);
        // return this.name;
    },
    set: function(val) {
        console.log('name is seted!', val);
        // this.name = val;
        // return val;
    }
});

delete person2.name; // why? when after delete, reading person2.name has value 

person2.name = 'meng2';
console.log(person2.name);

for (const key in person2) {
    if (Object.hasOwnProperty.call(person2, key)) {
        const element = person2[key];
        console.log(element, 's');
    }
}

// Object.defineProperty(person2, 'age', {

// })

