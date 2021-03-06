// 类装饰器可以在构造函数上增加通用方法,比如Tank和Player都需要一个方法来获取当前坐标，那么就可以将该方法抽离出来，做成一个装饰器.
// 当然这个功能也可以用继承extends实现，但是针对于这个场景，我们的坦克不应该是一个方法的子，正确的理解应该是，我们通过一个增幅，把一个方法，功能附加到了tank上。
// const decorator: ClassDecorator = (target) => {
//     console.log(target)
//     target.prototype.getPosition = () => {
//         return [100, 200]
//     }
// }

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
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";

        constructor(params: any) {
            super(params)
            console.log(params)

        }
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
    static haha() {}
    sdf() {}
}

console.log(new Greeter("world"));

