/**
 * 解决了创建多个相似对象的问题，但无法知道对象的类型
 * @param {*} name 
 * @param {*} age 
 * @param {*} job 
 */
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;

    o.sayName = function() {
        console.log(this.name);
    }

    return o;
}

var person1 = createPerson('akai', 20, 'Web Engineer');
var person2 = createPerson('meng', 18, 'boss');

person1.sayName();
person2.sayName();
