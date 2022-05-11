import { interval, Observable, take } from "rxjs";

const observable = interval(1000).pipe(take(3));

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
observable.subscribe(subject);

// subject 加入订阅者
subject.subscribe((value: any) => console.log('A ' + value))

setTimeout(() => {
	subject.subscribe((value: any) => console.log('B ' + value))
}, 1000)

// A 0
// A 1
// B 1
// A 2
// B 2

