// 单播是指，当observable被订阅时产生一个新的实例，不管观察者是从何时开始订阅，每个实例都是从头开始把值发给对应的观察者。
// 多播是指，当observable被订阅时产生一个新的实例，该实例永远只会收到订阅后的observable发出的消息（收到的消息是实时的）

import { interval, take } from "rxjs";

// 普通的observable是单播的
const danboObservable = interval(1000).pipe(take(3));
danboObservable.subscribe(value => console.log(value, 'observable one')) // 0 1 2

setTimeout(() => {
    danboObservable.subscribe(value => console.log(value, 'observable two')); // 0 1 2
}, 1000);



// 由subject吧普通observable变成多播。通过subject转发消息实现。
const duoboObservable = interval(1000).pipe(take(100));
const subject: any = {
	observers: [],
	subscribe(target: any) {
		this.observers.push(target);
	},
	next: function(value: any) {
		this.observers.forEach((next: any) => next(value))
	}
}
// 由中间人subject来转发消息
duoboObservable.subscribe(subject);
// subject 加入订阅者
subject.subscribe((value: any) => console.log('A ' + value))
setTimeout(() => {
	const subscription = subject.subscribe((value: any) => console.log('B ' + value));
}, 1000)

// A 0
// A 1
// B 1
// A 2
// B 2

