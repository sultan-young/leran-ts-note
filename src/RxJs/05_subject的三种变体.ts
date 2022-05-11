// rxjs 提供了三种subject的变体

import { AsyncSubject, BehaviorSubject, ReplaySubject } from "rxjs";

// // behaviorSubject 顾名思义，行为subject。 有新的订阅时候，会发出最近一次的值。
// const behaviorSubject = new BehaviorSubject(0);
// behaviorSubject.subscribe(value => console.log(value)); // 0 1 2
// behaviorSubject.next(1);
// behaviorSubject.next(2);
// behaviorSubject.subscribe(value => console.log(value)) // 2 会收得最近一次的值


// // replaySubject 重放subject。 会将所有值回放给新的订阅者,可以接受一个参数用来控制回放的次数
// const replaySubject = new ReplaySubject(2);
// replaySubject.next(0);
// replaySubject.next(1);
// replaySubject.subscribe(value => console.log(value)) // 0 1 2
// replaySubject.next(2);
// replaySubject.subscribe(value => console.log(value)) // 1 2 只会回放两次。



// asyncSubject 只有当 observable 执行完毕时候，才会将最后一个值发送给observer。如果因为异常终止，则async不会释放任何数据，observer会受到一个error。
// 在complete后订阅的observer也会收到最后一个值
const asyncSubject = new AsyncSubject();

asyncSubject.next(0);
asyncSubject.subscribe(value => console.log(value)) // 1
asyncSubject.next(1);
asyncSubject.complete()
setTimeout(() => {
    asyncSubject.subscribe(value => console.log(value)) // 1
}, 2000);

