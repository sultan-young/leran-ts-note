const DescriptorDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) : object => {
    // descriptor.value = () => {console.log('eat方法被替换')};
    // descriptor.writable = true;
    // descriptor.enumerable = true;
    // descriptor.configurable = true;

    return {
        value: () => {
            console.log('eat方法被替换')
        },
        writable: true,
        enumerable: true,
        configurable: true,
    };
}

class Pig {
    name = 'peiqi';
    @DescriptorDecorator
    eat() {

    }
}