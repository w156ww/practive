function defineReactive(obj, key, val) {
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            // 将 Dep.target （即当前 Watcher 对象存入 dep 的 subs 中）
            dep.addSub(Dep.target);
            return val;
        },
        set: function reactiveSetter(newVal) {
            if (newVal === val) return;
            // 在 set 时触发 dep 的 notify 方法来通知所有的 Watcher 对象更新视图
            dep.notify();
        }
    });
}

function observer(value) {
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key]);
    });
}

class Dep {
    constructor() {
        this.subs = [];
    }
    /* 在 subs 中添加一个 Watcher 对象 */
    addSub(sub) {
        this.subs.push(sub);
    }
    /* 通知所有 Watcher 对象更新视图 */
    notify() {
        console.log(this.subs);
        this.subs.forEach(sub => {
            sub.update();
        });
    }
}

class Watcher {
    constructor() {
        Dep.target = this;
    }

    update() {
        console.log("视图更新了");
    }
}

Dep.target = null;

class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data);
        new Watcher();
        console.log("render", this._data.test);
    }
}

const vm = new Vue({
    data: {
        test: "this is test."
    }
});
vm._data.test = "change test";
