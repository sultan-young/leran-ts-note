import 'reflect-metadata'

const validate: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        const paramIndexArr = Reflect.getMetadata('required', target, propertyKey);
        paramIndexArr.forEach((index: number) => {
            if(args[index] === undefined) {
                throw new Error(`第${index}参数未必传项！`)
            }
        })
        method.apply(this, args);
    }
}

const required: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    const paramIndexArr = Reflect.getMetadata('required', target, propertyKey) || [];
    paramIndexArr.push(parameterIndex);
    Reflect.defineMetadata('required', paramIndexArr, target, propertyKey);
}

class SSO {
    @validate
    login(@required username: string, @required password: string) {

    }
}