"use strict";
/**
 * 装饰器工厂，可以通过传入的参数，动态返回一个装饰器。使用了设计模式中的工厂模式
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AttackDecoratorFactory = (type) => {
    return (target) => {
        target.prototype.attack = () => {
            if (type === 'cat') {
                console.log('猫猫攻击');
            }
            else if (type === 'dog') {
                console.log('狗狗攻击');
            }
        };
    };
};
let Cat = class Cat {
};
Cat = __decorate([
    AttackDecoratorFactory('cat')
], Cat);
let Dog = class Dog {
};
Dog = __decorate([
    AttackDecoratorFactory('dog')
], Dog);
new Cat().attack();
new Dog().attack();
