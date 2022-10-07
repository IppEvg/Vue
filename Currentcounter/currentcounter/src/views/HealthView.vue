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
    name: 'HealthView',
    data() {
        return {
            id: this.$store.getters.getLength + 1,
            data: new Date().toLocaleDateString(),
            category: "Health",
            value: '',
            menu: false
        }
    },
    methods: {
        onButton() {
            let newObj = { id: this.id, data: this.data, category: this.category, value: this.value, menu: false };
            for (var value of this.$store.state.costList) {
                if (newObj.id == value.id) {
                    this.id = this.$store.getters.getLength + 1;
                    newObj.id = this.$store.getters.getLength + 1;
                    alert('Такой id уже существует! Был добавлен платеж с id больше на 1');
                }
            }
            this.$store.commit('addNewString', newObj);
        }
    },
    mounted() {
        if (this.$route.params.value) {
            this.value = this.$route.params.value;

        }

    }
}
</script>