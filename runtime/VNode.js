class VNode {
    constructor(tag, data, children, text, elm) {
        this.tag = tag; // 当前节点的标签名
        this.data = data; // 当前节点的一些数据信息，比如 attrs、props 等数据
        this.children = children; // 当前节点的子节点，是一个数组
        this.text = text; // 当前节点的文字
        this.elm = elm; // 当前虚拟节点对应的真实 dom 节点
    }
}

/**
 *
 * 比如有这么一个 Vue 组件
<template>
  <span class="demo" v-show="isShow">
    This is a span.
  </span>
</template>
 用 js 代码形式表示就是下面这样
*/

function render() {
    return new VNode(
        "span",
        {
            directives: [{ rawName: "v-show", expression: "isShow", name: "show", value: true }],
            staticClass: "demo"
        },
        [new VNode(undefined, undefined, undefined, "This is a span")]
    );
}
console.log("render", render());

function createEmptyVNode() {
    const node = new VNode();
    node.text = "";
    return node;
}

function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
}

function cloneVNode(node) {
    const cloneVnode = new VNode(node.tag, node.data, node.children, node.text, node.elm);
    return cloneVnode;
}
