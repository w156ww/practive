<template>
    <div class="home">
        <list></list>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import List from "./Home/List";
export default {
    name: "Home",
    components: { List }
};
</script>
