<template>
    <button @click="onbuttonClick" class="button">
        Add new currents +
    </button>
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
    padding: 10px 15px;
    transition: 300 ms;
    width: 30%;
    margin: 0 auto;
    transition: all 500ms;
    font-size: 12px;
    margin-top: 20px;
}

.button:hover {
    background-color: transparent;
    color: blueviolet;
    cursor: pointer;
}
</style>