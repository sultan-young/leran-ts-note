
/**
 * 多个装饰器可以进行叠加，执行顺序为从目标类，由近到远依次执行
 */

const decorator2: ClassDecorator = (target) => {
    console.log('decorator2')
    target.prototype.getPosition = () => {
        return [100, 200]
    }
}

const attackDecorator2: ClassDecorator = (target) => {
    console.log('attackDecorator2')
    console.log(`${target.name}装饰器具备了攻击功能`)
}

@attackDecorator2
@decorator2
class Tank2 {

}

class Player2 {

}
