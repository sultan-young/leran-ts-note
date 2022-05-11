import { Subject } from "rxjs";
// subject 既可以作为事件源供各个observer订阅，又可以作为observer向流里发射数据。及 subject是observable和observer的综合体。
// subject 为多播

const subject = new Subject();


subject.next(1);
subject.next(2)
subject.subscribe(value => console.log(value))
subject.next(3)
setTimeout(() => {
    const subscription = subject.subscribe(value => console.log(value));
    subscription.unsubscribe(); // 这里取消订阅后，不会影响到其他observer接受信息
}, 1000);
