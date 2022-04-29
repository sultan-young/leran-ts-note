"use strict";
/**
 * 多个装饰器可以进行叠加，执行顺序为从目标类，由近到远依次执行
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const decorator2 = (target) => {
    console.log('decorator2');
    target.prototype.getPosition = () => {
        return [100, 200];
    };
};
const attackDecorator2 = (target) => {
    console.log('attackDecorator2');
    console.log(`${target.name}装饰器具备了攻击功能`);
};
let Tank2 = class Tank2 {
};
Tank2 = __decorate([
    attackDecorator2,
    decorator2
], Tank2);
class Player2 {
}
