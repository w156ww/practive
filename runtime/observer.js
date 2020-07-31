function cb() {
    // 渲染视图
    console.log("视图更新");
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true, // 可枚举
        configurable: true, // 可被删除或修改
        get: function reactiveGetter() {
            return val; // 还会进行依赖收集
        },
        set: function reactiveSetter(newVal) {
            if (newVal === val) return;
            cb(newVal);
        }
    });
}

function observer(value) {
    if (!value || typeof value !== "object") return;
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key]);
    });
}

class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data);
    }
}

const o = new Vue({
    data: {
        test: "i am test."
    }
});
o._data.test = "hello, world.";
