import  "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
     return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

const NameDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
    console.log(target, propertyKey)
}

class Greeter {
    @format("Hello, %s")
    greeting: string;

    @NameDecorator
    name: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");  
        console.log(formatString.replace("%s", this.greeting))
        return formatString.replace("%s", this.greeting);
    }
} 
new Greeter('我是').greet()