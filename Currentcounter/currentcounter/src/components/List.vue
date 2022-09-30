<template>
    <div class='cost-list'>
        <div v-for="cost of list" v-bind:key="cost.id" class="cost-list__item">
            <span>{{cost.id}}</span>
            <span>{{cost.data}}</span>
            <span>{{cost.category}}</span>
            <span>{{cost.value}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        list: Array,
    }

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
</style>