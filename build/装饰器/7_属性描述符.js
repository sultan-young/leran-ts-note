"use strict";
// 官方例子
// import  "reflect-metadata";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// const formatMetadataKey = Symbol("format");
// function format(formatString: string) {
//      return Reflect.metadata(formatMetadataKey, formatString);
// }
// function getFormat(target: any, propertyKey: string) {
//     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }
// class Greeter {
//     @format("Hello, %s")
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         let formatString = getFormat(this, "greeting");  
//         console.log(formatString.replace("%s", this.greeting))
//         return formatString.replace("%s", this.greeting);
//     }
// } 
// new Greeter('我是').greet()
const initCarPropertyDec = (property) => {
    return (target, propertyKey) => {
        target[propertyKey] = property;
    };
};
class Car {
}
__decorate([
    initCarPropertyDec('奔驰'),
    __metadata("design:type", String)
], Car.prototype, "name", void 0);
