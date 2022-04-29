"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 通过MessageDecorator装饰器，使登录和注销模块都具备了发送消息的功能
 */
const MessageDecorator = (target) => {
    target.prototype.message = (content) => {
        console.log(`系统消息：${content}`);
    };
};
let LoginController = class LoginController {
    login() {
        this.message('登录成功');
    }
};
LoginController = __decorate([
    MessageDecorator
], LoginController);
let LogoutController = class LogoutController {
    logout() {
        this.message('注销成功');
    }
};
LogoutController = __decorate([
    MessageDecorator
], LogoutController);
new LoginController().login();
new LogoutController().logout();
