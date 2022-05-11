import { Subject } from "rxjs";
// subject 既可以作为事件源供各个observer订阅，又可以作为observer向流里发射数据。及 subject是observable和observer的综合体。
// subject 为多播

const subject = new Subject();


subject.next(1);
subject.subscribe(value => console.log(value))
