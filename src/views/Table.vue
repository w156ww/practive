<template>
    <div class="table">
        table
        <v-table></v-table>
    </div>
</template>

<script>
import VTable from "../components/v-table/v-table.vue";
export default {
    name: "Table",
    components: { VTable },
    props: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
        console.log("created");
    },
    mounted() {}
};
</script>
<style lang="scss"></style>
