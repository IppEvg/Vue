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

    data() {
        return {
            id: "",
            data: "",
            category: "",
            value: "",
            menu: false
        }
    },
    methods: {
        onButton() {
            let newObj = { id: this.id, data: this.data, category: this.category, value: this.value, menu: this.true };
            for (var value of this.$store.state.costList) {
                if (newObj.id == value.id) {
                    this.id = this.$store.getters.getLength + 1;
                    newObj.id = this.$store.getters.getLength + 1;
                    alert('Такой id уже существует! Был добавлен платеж с id больше на 1');
                }
            }

            this.$store.commit('addNewString', newObj);
            this.$emit('delForm');

        }

    }
}


</script>

<style>
.form {
    padding: 40px;
    width: 30%;
    height: 20vh;
    background-color: rgba(129, 129, 129, 0.938);
    border: 1px solid grey;
    position: absolute;
    top: 25vh;
    left: 32vw;
    border-radius: 20px;
}

.input-string {
    margin: 5px 0px;
    border-radius: 5px;
    cursor: pointer;
}

.button {
    background-color: blueviolet;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 2px;
    color: rgb(0, 0, 0);
    padding: 10px 20px;
    transition: 300 ms;
}

.button:hover {
    background-color: white;
    color: blueviolet;
}
</style>