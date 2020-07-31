<template>
    <div class="v-table">
        <!-- <ul v-for="(item, index) in data" :key="index">
            <li v-for="option in column" :key="option.prop">{{ item[option.prop] }}</li>
        </ul> -->
        <table cellspacing="0" cellpadding="0" border="0">
            <thead>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td v-for="option in column" :key="option.prop">{{ item[option.prop] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import "./v-table.scss";
export default {
    name: "v-table",
    components: {},
    props: {},
    data() {
        return {
            data: [],
            column: [
                { prop: "name" },
                { prop: "col1" },
                { prop: "col2" },
                { prop: "col3" },
                { prop: "col4" },
                { prop: "col5" }
            ]
        };
    },
    computed: {},
    watch: {},
    methods: {
        createRow() {
            return {
                name: "name",
                col1: "col1",
                col2: "col2",
                col3: "col3",
                col4: "col4",
                col5: "col5"
            };
        },
        getData() {
            for (let i = 0; i < 30; i++) {
                this.data.push(this.createRow());
            }
        }
    },
    created() {
        console.log("created");
        this.getData();
    },
    mounted() {}
};
</script>
