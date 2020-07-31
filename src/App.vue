<template>
    <div id="app">
        <div id="nav">
            <router-link v-for="item in routeLink" :to="item.path" :key="item.path"
                >{{ item.name }}
            </router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {
            routeLink: [
                { path: "/", name: "Home" },
                { path: "/about", name: "About" },
                { path: "/table", name: "Table" }
            ]
        };
    }
};
</script>

<style lang="scss">
#app {
    #nav {
        width: 100%;
        text-align: center;
        a {
            box-sizing: border-box;
            padding: 10px;
            color: #333;
            text-decoration: none;
            &:active {
                color: #ff7700;
            }
        }
    }
}
</style>
