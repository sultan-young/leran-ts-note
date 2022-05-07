"use strict";
// 未使用装饰器版本
// class MusicSystem {
//     getMusicById(name: string): Promise<{name: string, singer: string}> {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (Math.round(Math.random())) {
//                     resolve({name: '凤凰传奇', singer: '玲花|曾毅'});
//                 } else {
//                     reject()
//                 }
//             }, 1000);
//         })
//     }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//     async play(name: string) {
//         try {
//             const music = await this.getMusicById(name);
//            // ... do something
//             console.log(`在曲库中找到了名为${music.name}的音乐，由${music.singer}进行演唱，敬请欣赏。`);
//         } catch (error) {
//             throw new Error(`未找到名为${name}的音乐，播放失败`);
//         }
//     }
//     async deleteByName(name: string) {
//         // ... do something
//         try {
//             const music = await this.getMusicById(name);
//             // ... do something
//             console.log(`${music.name}音乐删除成功！`);
//         } catch (error) {
//             throw new Error(`未找到名为${name}的音乐，删除失败`);
//         }
//     }
// }
const ErrorDecorator = (target, propertyKey, descriptor) => {
    const sourceMethod = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield sourceMethod.apply(this, args);
            }
            catch (error) {
                console.error('捕获到了错误');
                // do something
            }
        });
    };
};
class MusicSystem {
    getMusicById(name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.round(Math.random())) {
                    resolve({ name: '凤凰传奇', singer: '玲花|曾毅' });
                }
                else {
                    reject();
                }
            }, 1000);
        });
    }
    play(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const music = yield this.getMusicById(name);
            // ... do something
            console.log(`在曲库中找到了名为${music.name}的音乐，由${music.singer}进行演唱，敬请欣赏。`);
        });
    }
    deleteByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const music = yield this.getMusicById(name);
            // ... do something
            console.log(`${music.name}音乐删除成功！`);
        });
    }
}
__decorate([
    ErrorDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MusicSystem.prototype, "play", null);
__decorate([
    ErrorDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MusicSystem.prototype, "deleteByName", null);
const musicSystem = new MusicSystem();
musicSystem.play('凤凰传奇');
musicSystem.deleteByName('凤凰传奇');
