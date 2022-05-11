// cold observable 只有被 observer 订阅时候，才会产生新值。是单播的。每个订阅实例都会从第一个产生的值开始接收。每个observer收到的值都是一样的。
// hot observable 不管有没有observer订阅都会产生值。是多播的。每个observer从订阅开始接受到值。每个observer接受到的值不一致，取决于它们什么时候开始订阅。