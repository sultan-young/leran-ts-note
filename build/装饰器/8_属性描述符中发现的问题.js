"use strict";
// const NameDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
//     let property = 'defaultValue';
//     Object.defineProperty(target, propertyKey, {
//         get: () => {
//             return property;
//         },
//         set: (value) => {
//             property = value;
//         }
//     })
// }
// class Person {
//     @NameDecorator
//     name: string = '1234';
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// const xiaoming = new Person('小明');
// const xiaolong = new Person('小龙');
// console.log(xiaoming.name, Person.prototype.name)
// console.log(xiaolong.name, Person.prototype.name)
// // console.log(new Person().name)
// function Monster(age) {
//     this.age = age;
//     const obj = {};
//     Object.setPrototypeOf(obj, Monster.prototype)
// }
// let age = 12;
// Object.defineProperty(Monster.prototype, 'age', {
//     get() {
//         return age
//     },
//     set(value) {
//         age = value
//     }
// })
// const xiaoyang = new Monster(25);
// const xiaolong = new Monster(35)
// // console.log(xiaoyang.name, Person.prototype.name)
// // console.log(xiaolong.name, Person.prototype.name)
// // 结果为1。 先访问实例属性，后访问原型属性
// console.log(xiaoyang.age, Monster.prototype.age, xiaoyang)
// console.log(xiaolong.age, Monster.prototype.age, xiaolong)
class Person {
    constructor(name, age) {
        this.name = '小明';
        this.age = 0;
        // console.log(this.name)
        this.name = name;
        this.age = age;
    }
}
Person.haha = 1;
// Person.prototype.name = '小李';
// let _name = '小白';
// Object.defineProperty(Person.prototype, 'name', {
//     get() {
//         return _name
//     },
//     set(value) {
//         console.log('setter被访问')
//         _name = value
//     }
// })
// Person.prototype.age = '12'
let age = 12;
Object.defineProperty(Person.prototype, 'age', {
    value: 1,
    writable: true,
});
const xiaoyang = new Person('小杨', 25);
const xiaolong = new Person('小龙', 35);
// console.log(xiaoyang.name, Person.prototype.name)
// console.log(xiaolong.name, Person.prototype.name)
// 结果为1。 先访问实例属性，后访问原型属性
console.log(xiaoyang.age, Person.prototype.age, xiaoyang);
console.log(xiaolong.age, Person.prototype.age, xiaolong);
// TIPS: 猜想1
// 在类实例化之前，在类上的属性和方法都会被加在类的原型上。当类初始化完毕后，会把属性从类的原型上剔除。
// 这个猜想解释了我为什么在原型上添加name的set，会在实例化时候触发一次。
/**
 * TIPS: 猜想2
 * 当遇到 new 关键字时候，会先定义一个新的object。 之后将object的__proto__ 指向类的 prototype。
 * 之后通过this向实例添加属性时候，如果实例上已经有这个属性了，那就不再添加。
 * ERROR: 只有使用defineProperty定义的属性才会有这个特性，直接在原型上定义不生效。
 */
/**
 * 以上两个猜想都错误，答案已在mdn中找到。
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * mdn中有一句话：如果访问器属性是被继承的，他的get和set方法会在子对象的属性被访问或修改时候调用。
 * 如果这些方法用一个变量存值，该值会被所有对象共享。
 */
