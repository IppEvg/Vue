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
    // computed: {
    //     check: {
    //         get() {

    //             return this.$store.getters.getShow;
    //         },
    //         set() {
    //             this.$store.commit('chengeShower')
    //         }
    //     }
    // }
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