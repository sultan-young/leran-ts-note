/**
 * 装饰器工厂，可以通过传入的参数，动态返回一个装饰器。使用了设计模式中的工厂模式
 */

const AttackDecoratorFactory = (type: string) => {
    return (target: Function) => {
        target.prototype.attack = () => {
            if (type === 'cat') {
                console.log('猫猫攻击')
            } else if (type === 'dog') {
                console.log('狗狗攻击')
            }
        }
    }
}

@AttackDecoratorFactory('cat')
class Cat {
    
}

@AttackDecoratorFactory('dog')
class Dog {

}

new Cat().attack()
new Dog().attack()