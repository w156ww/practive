import Dep from "./Dep";
// 坚挺着，监听对象属性值的变化
class Observer {
    constructor(value) {
        this.value = value;
        this.walk(value);
    }
    // 遍历属性值并监听
    walk(value) {
        Object.keys(value).forEach((key) => this.convert(key, value[key]));
    }
    // 执行监听的具体方法
    convert(key, val) {
        defineReactive(this.value, key, val);
    }
}

function defineReactive(obj, key, val) {
    const dep = new Dep();
    // 给当前属性的值添加监听
    let chlidOb = observe(val);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            // 如果 Dep 类存在 target 属性，将其添加到 dep 实例的 subs 数组中
            // target 指向一个 Watcher 实例，每个 Watcher 都是一个订阅者
            // Watcher 实例在实例化过程中，会读取 data 中的某个属性，从而触发当前 get 方法
            if (Dep.target) {
                dep.depend();
            }
            return val;
        },
        set: (newVal) => {
            if (val === newVal) return;
            val = newVal;
            // 对新值进行监听
            chlidOb = observe(newVal);
            // 通知所有订阅者，数值被改变了
            dep.notify();
        },
    });
}

function observe(value) {
    // 当值不存在，或者不是复杂数据类型时，不再需要继续深入监听
    if (!value || typeof value !== "object") {
        return;
    }
    return new Observer(value);
}

export default observe;
