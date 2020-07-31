<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="box">
            <div class="container">ffff</div>
        </div>
        <children :obj="obj"></children>
        <div id="temp"></div>
    </div>
</template>

<script>
import Children from "./about/children";
export default {
    components: {
        Children
    },
    data() {
        return {
            obj: {
                name: "wang",
                age: "26"
            }
        };
    }
};
</script>
<style lang="scss">
.about {
    .box {
        display: flex;
        width: 100%;
        height: 200px;
        border: 1px solid #000;
        .container {
            margin: auto;
            border: 1px solid #000;
        }
    }
}
</style>
