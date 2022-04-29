"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器可以在构造函数上增加通用方法,比如Tank和Player都需要一个方法来获取当前坐标，那么就可以将该方法抽离出来，做成一个装饰器.
// 当然这个功能也可以用继承extends实现，但是针对于这个场景，我们的坦克不应该是一个方法的子，正确的理解应该是，我们通过一个增幅，把一个方法，功能附加到了tank上。
const decorator = (target) => {
    console.log(target);
    target.prototype.getPosition = () => {
        return [100, 200];
    };
};
let Tank = class Tank {
};
Tank = __decorate([
    decorator
], Tank);
class Player {
}
