// compile 编译阶段分为 parser optimize generator 三个阶段，通过 parser 阶段通过正则生成 AST 抽象语法树，结构如下
const AST = {
    attrsMap: {
        ":class": "c",
        class: "demo",
        "v-if": "isShow"
    },
    classBinding: "c",
    is: "isShow",
    ifConditions: [
        {
            exp: "isShow"
        }
    ],
    staticClass: "demo",
    tag: "div",
    children: [
        {
            attrsMap: {
                "v-for": "item in sz"
            },
            alias: "item",
            for: "sz",
            forProcessed: true,
            tag: "span",
            children: [
                {
                    expression: "_s(item)",
                    text: "{{item}}"
                }
            ]
        }
    ]
};

function test() {
    const that = this;
    return function() {
        const ctx = this;
        console.log(that);
        console.log(ctx);
    };
}
const close = test();
const o = {
    b: 1,
    a: test()
};

o.a();
