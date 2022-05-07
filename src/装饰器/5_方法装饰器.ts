
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

const ErrorDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const sourceMethod = descriptor.value;
    descriptor.value = async function (...args: any) {
        try {
            await sourceMethod.apply(this, args);
        } catch (error) {
            console.error('捕获到了错误');
            // do something
        }
    }
}
class MusicSystem {
    getMusicById(name: string): Promise<{name: string, singer: string}> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.round(Math.random())) {
                    resolve({name: '凤凰传奇', singer: '玲花|曾毅'});
                } else {
                    reject()
                }
            }, 1000);
        })
    }
    
    @ErrorDecorator
    async play(name: string) {
        const music = await this.getMusicById(name);
        // ... do something
        console.log(`在曲库中找到了名为${music.name}的音乐，由${music.singer}进行演唱，敬请欣赏。`);

    }

    @ErrorDecorator
    async deleteByName(name: string) {
        const music = await this.getMusicById(name);
        // ... do something
        console.log(`${music.name}音乐删除成功！`);
    }
}

const musicSystem = new MusicSystem();
musicSystem.play('凤凰传奇');
musicSystem.deleteByName('凤凰传奇');