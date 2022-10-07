<template>
    <div id="app">
        <AddButton v-on:doclick="changeMeth"></AddButton>
        <FormItem v-show="isShow" v-on:delForm="changeMeth">
        </FormItem>
        <ListItem>
        </ListItem>

    </div>
</template>
<script>
import AddButton from "../components/AddButton.vue";
import FormItem from "../components/Form.vue";
import ListItem from "../components/List.vue";


export default {
    name: 'App',
    data() {
        return {
            isShow: false
        }
    },
    components: {
        AddButton, FormItem, ListItem
    },

    methods: {
        changeMeth() {
            this.isShow = !this.isShow
        },

    },
    mounted() {
        this.$store.dispatch('fetchData');
    }



}
</script>


<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    border: 2px solid #7777;
    min-height: 400px;
    max-width: 800px;
    margin: 30px auto;
    padding: 10px
}

.nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
