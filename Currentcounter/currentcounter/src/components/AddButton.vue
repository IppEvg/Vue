<template>
    <div v-on:click="onbuttonClick" class="button">
        Add new currents +
    </div>
</template>

<script>
export default {
    name: 'AddButton',
    methods: {
        onbuttonClick() {
            this.$emit('doclick')
        }
    }
}
</script>

<style>
.button {
    background-color: blueviolet;
    border: 1px solid grey;
    border-radius: 2px;
    color: grey;
    padding: 10px 20px;
    transition: 300 ms;
    width: 25%;
    margin: 0 auto;
}

.button:hover {
    background-color: transparent;
    color: blueviolet;
}
</style>