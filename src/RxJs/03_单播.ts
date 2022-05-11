// 单播是指，当observable被订阅时产生一个新的实例，不管观察者是从何时开始订阅，每个实例都是从头开始把值发给对应的观察者。

import { interval, take } from "rxjs";

const observable = interval(1000).pipe(take(3));
observable.subscribe(value => console.log(value, 'observable one')) // 0 1 2

setTimeout(() => {
    observable.subscribe(value => console.log(value, 'observable two')); // 0 1 2
}, 1000);

