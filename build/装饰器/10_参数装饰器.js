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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const validate = (target, propertyKey, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        const paramIndexArr = Reflect.getMetadata('required', target, propertyKey);
        paramIndexArr.forEach((index) => {
            if (args[index] === undefined) {
                throw new Error(`第${index}参数未必传项！`);
            }
        });
        method.apply(this, args);
    };
};
const required = (target, propertyKey, parameterIndex) => {
    const paramIndexArr = Reflect.getMetadata('required', target, propertyKey) || [];
    paramIndexArr.push(parameterIndex);
    Reflect.defineMetadata('required', paramIndexArr, target, propertyKey);
};
class SSO {
    login(username, password) {
    }
}
__decorate([
    validate,
    __param(0, required),
    __param(1, required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SSO.prototype, "login", null);
