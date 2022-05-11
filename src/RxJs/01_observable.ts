import RxJs, { Observable } from 'rxjs';

// Observable 表示一个可调用的未来值或事件的集合。可以被多个observer订阅，每个订阅关系相互独立，互不影响。
// observer 一个回调函数的集合，它负责观察任务执行状态并向流里发射信号
// subscription 表示observable的执行。最常用的方法为 unsubscribe。 用来清理 subscription 所占的资源
// 普通的observable都是单播


const observable = new Observable((observer) => {
    observer.next('fish');
    setTimeout(() => {
        observer.error('dog');
        observer.complete();
    }, 1000);
});

const subscription = observable.subscribe(value => {
    console.log(value)
    // fish
    // after 1s ...
    // throw error dog
    // complete
});




// subscription.unsubscribe();