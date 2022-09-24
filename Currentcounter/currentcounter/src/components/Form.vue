<template>
    <div class="form">
        <div class="input-string">
            <input class="inputs" type="text" v-model.lazy="id" placeholder="id">
        </div>
        <div class="input-string">
            <input class="inputs" type="text" v-model.lazy="data" placeholder="date">
        </div>
        <div class="input-string">
            <input class="inputs" type="text" v-model="category" placeholder="category">
        </div>
        <div class="input-string">
            <input class="inputs" type="text" v-model="value" placeholder="value">
        </div>
        <div class="button" v-on:click="onButton">Add new current +</div>
    </div>
</template>

<script>
export default {
    name: 'FormItem',
    props: {
        list: Array,
        show: Boolean
    },
    data() {
        return {
            id: "",
            data: "",
            category: "",
            value: "",
        }
    },
    methods: {
        onButton() {
            let newObj = { id: this.id, data: this.data, category: this.category, value: this.value };
            this.$emit('adder', newObj);
        }
    }
}
</script>

<style>
.form {
    width: 1000px;
    height: 60vh;
    position: absolute;
    top: 10%;
    left: 15%;
    background-color: white;
    border: 1px solid grey;
}

.button {
    background-color: blueviolet;
    border: 1px solid grey;
    border-radius: 2px;
    color: grey;
    padding: 10px 20px;
    transition: 300 ms;
}

.button:hover {
    background-color: transparent;
    color: blueviolet;
}
</style>