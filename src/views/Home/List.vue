<template>
    <div class="list">
        <list-item a="a" b="b" c="c" d="d"></list-item>
    </div>
</template>

<script>
import ListItem from "./list-item";
export default {
    name: "list",
    components: { ListItem },
    props: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {
        People() {
            console.log("People");
        }
    },
    created() {
        const people = new this.People();
        console.log(people);
    },
    mounted() {}
};
</script>
<style lang="scss"></style>
