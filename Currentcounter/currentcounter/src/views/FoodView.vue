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
    name: 'FoodView',
    data() {
        return {
            id: this.$store.getters.getLength + 1,
            data: new Date().toLocaleDateString(),
            category: "Food",
            value: ''
        }
    },
    methods: {
        onButton() {
            let newObj = { id: this.id, data: this.data, category: this.category, value: this.value };
            for (var value of this.$store.state.costList) {
                if (newObj.id == value.id) {
                    this.id = this.$store.getters.getLength + 1;
                    newObj.id = this.$store.getters.getLength + 1;
                    alert('Такой id уже существует! Был добавлен платеж с id больше на 1');
                }
            }
            if (this.$route.params.value) {
                this.value = this.$route.params.value;
            }
            this.$store.commit('addNewString', newObj);
        }
    }

}
</script>
