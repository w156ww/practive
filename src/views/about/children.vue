<template>
    <div class="children">
        <button @click="createComp">创建</button>
        <div ref="container"></div>
    </div>
</template>

<script>
import Vue from "vue";
import Test from "./Test";
export default {
    name: "children",
    components: {},
    props: {
        obj: {
            type: Object,
            defualt: () => ({})
        }
    },
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {
        changeObj() {
            this.obj.name = "heihei";
            console.log("改变了");
        },
        createComp() {
            const el = this.$refs.container;
            const constructorComp = Vue.extend(Test);
            const instance = new constructorComp({
                el
            });
        }
    },
    created() {},
    mounted() {
        console.log(this.obj);
        this.changeObj();
    }
};
</script>
<style lang="scss"></style>
