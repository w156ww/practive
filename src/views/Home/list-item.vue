<template>
    <div class="list-item"></div>
</template>

<script>
export default {
    name: "list-item",
    components: {},
    props: {
        b: {
            type: String,
            defaut: ""
        }
    },
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {
        rev(num) {
            let res = 0;
            let dot = 0;
            let count = 0;
            while (!Number.isInteger(num)) {
                num *= 10;
                dot++;
            }
            while (num > 0) {
                res = res + (num % 10);
                res *= 10;
                count++;
                num = Number.parseInt(num / 10);
            }
            res = res / 10 ** (count - dot + 1);
            console.log(res);
        }
    },
    created() {
        console.log(this.$attrs);
        this.rev(1234456.22);
    },
    mounted() {}
};
</script>
<style lang="scss"></style>
