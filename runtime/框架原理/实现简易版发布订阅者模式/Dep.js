let uid = 0;
// 存储订阅者 watcher ，并发布消息
class Dep {
    constructor() {
        // 设置 id，用于区分新 watcher和只改变属性值后新产生的 watcher
        this.id = uid++;
        // 储存订阅者
        this.subs = [];
    }
    // 一个静态属性，工作时指向当前处理的 watcher
    static target = null;
    // 触发 target 上的 Watcher 中的 addDep 方法，参数为 dep 的实例本身
    depend() {
        Dep.target.addDep(this);
    }
    // 添加订阅者
    addSub(sub) {
        this.subs.push(sub);
    }
    notify() {
        // 通知所有的订阅者，触发订阅者的响应逻辑处理
        this.subs.forEach((sub) => sub.update());
    }
}

export default Dep;
