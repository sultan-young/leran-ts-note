"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 类装饰器可以在构造函数上增加通用方法,比如Tank和Player都需要一个方法来获取当前坐标，那么就可以将该方法抽离出来，做成一个装饰器.
// 当然这个功能也可以用继承extends实现，但是针对于这个场景，我们的坦克不应该是一个方法的子，正确的理解应该是，我们通过一个增幅，把一个方法，功能附加到了tank上。
const decorator = (target) => {
    console.log(target);
    target.prototype.getPosition = () => {
        return [100, 200];
    };
};
// class BaseClass {
//     getPosition() {
//         return {
//             x: 100,
//             y: 200,
//             z: 300,
//         }
//     }
// }
// class Tank extends BaseClass{}
// class Plane extends BaseClass {}
// class Animal extends BaseClass {}
// console.log(
//     new Tank().getPosition(),
//     new Plane().getPosition(),
//     new Plane().getPosition(),
// )
// TIPS: 能力扩展
// const getPositionDecorator: ClassDecorator = (constructor: Function) => {
//     constructor.prototype.getPosition = () => {
//         return [100, 200]
//     }
// }
// const addPetrolDecorator: ClassDecorator = (constructor: Function) => {
//     constructor.prototype.addPetrol = () => {
//         // do something
//         console.log(`${constructor.name}进行加油`);
//     }
// }
// @addPetrolDecorator
// @getPositionDecorator
// class Tank {}
// @addPetrolDecorator
// @getPositionDecorator
// class Plane {}
// @getPositionDecorator
// class Animal {}
// TIPS: 重载构造函数
function classDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "override";
        }
    };
}
let Greeter = class Greeter {
    constructor(m) {
        this.property = "property";
        this.hello = m;
    }
};
Greeter = __decorate([
    classDecorator,
    __metadata("design:paramtypes", [String])
], Greeter);
console.log(new Greeter("world"));
