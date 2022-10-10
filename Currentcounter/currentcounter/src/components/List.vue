<template>
    <div class='cost-list'>
        <div v-for="cost of list" v-bind:key="cost.id" class="cost-list__item">
            <span>{{cost.id}}</span>
            <span>{{cost.data}}</span>
            <span>{{cost.category}}</span>
            <span>{{cost.value}}</span>
            <span v-on:click="$modal.show(cost)" class="menu">&#9776;
                <ModalWindow v-bind:name="cost" />
            </span>
        </div>
    </div>
</template>

<script>
import ModalWindow from "./modalWindow.vue"
export default {
    name: 'ListItem',
    data() {
        return {

        }
    },
    components: { ModalWindow },
    computed: {
        list() {

            return this.$store.getters.getPaymentsList;
        }
    },
    methods: {
        // onShow(name) {
        //     if (this.name == name) {
        //         this.isClick = !this.isClick
        //     }
        // }
    },
    // mounted() {
    //     this.$modal.EventBus.$on('show', this.onShow)
    // }

}
</script>

<style>
.cost-list {
    width: 500px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
}

.cost-list__item {
    height: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(170, 165, 165);
    align-items: center;
}

.menu {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
    cursor: pointer;

}
</style>