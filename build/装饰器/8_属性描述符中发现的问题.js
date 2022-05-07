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
class Person {
    constructor(name) {
        this.name = '小明';
        console.log(this.name);
        this.name = name;
        console.log(this.name);
    }
}
Person.prototype.name = '小龙';
let _name = '小龙';
Object.defineProperty(Person.prototype, 'name', {
    get() {
        console.log('被访问了');
        return _name;
    },
    set(value) {
        console.log('被更改了', value);
        _name = value;
    }
});
const xiaoyang = new Person('小杨');
// const xiaolong = new Person('小龙')
// console.log(xiaoyang.name, Person.prototype.name)
// console.log(xiaolong.name, Person.prototype.name)
// 结果为1。 先访问实例属性，后访问原型属性
// TIPS: 猜想
// 在类实例化之前，在类上的属性和方法都会被加在类的原型上。当类初始化完毕后，会把属性从类的原型上剔除。
// 这个猜想解释了我为什么在原型上添加name的set，会在实例化时候触发一次。
